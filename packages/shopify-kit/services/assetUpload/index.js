const fs = require('fs-extra')
const output = require('@halfhelix/terminal-kit')
const { shopifyApiRequest } = require('./../util')
const throttledQueue = require('./lib/throttledQueue')

module.exports = function (settings, args = {}) {
  return {
    queue: [],
    errors: [],
    singleFileSpinner: false,
    requestsPerInterval: settings['shopify.limitRequestsPerIntervalToFive']
      ? Math.min(settings['shopify.requestsPerInterval'], 5)
      : settings['shopify.requestsPerInterval'],
    interval: settings['shopify.interval'],
    evenlyDistributedUpload: settings['shopify.evenlyDistributedUpload'],
    isOnlyOneFile: false,
    uploadCompleteCallback: function () {},

    /**
     * This is the main routine. We take an array of tokens
     * that represent each file and generate a queue that
     * uploads the files to Shopify.
     *
     * This routine supports two runs. If the first run
     * contained API throttle errors, we try those uploads
     * again.
     *
     * @param {Array} paths
     * @returns {Object} Summary of all errors (Promise)
     */
    sync(paths = []) {
      this._bindContext()
      this.queue = paths
      this.errors = []

      if (!this.queue.length) {
        return Promise.resolve(false)
      }

      this.isOnlyOneFile = this.queue.length === 1

      if (this.isOnlyOneFile) {
        this.singleFileSpinner = output.action(
          `${args.label || 'Uploading'} "${paths[0].theme}"`
        )
      }

      settings.$emit('upload.queue', this.queue)

      return this.enqueue(
        'Uploading',
        this.upload,
        this.queue,
        this.requestsPerInterval,
        this.interval,
        this.evenlyDistributedUpload
      )
        .then(() => {
          if (this.isOnlyOneFile) {
            this.singleFileSpinner[this.errors.length ? 'fail' : 'succeed']()
          }
          if (this.errors.length) {
            return Promise.resolve(this._reduceErrorMessagesToArray())
          } else {
            return Promise.resolve([])
          }
        })
        .then((errors) => {
          if (
            this.isOnlyOneFile ||
            !errors.length ||
            !settings['shopify.retryUploadErrors']
          ) {
            return Promise.resolve({
              firstRunErrors: errors,
              secondRunErrors: [],
              secondRun: false
            })
          }
          const sortedErrors = errors.reduce(
            (obj, token) => {
              if (settings['shopify.shouldReRunError'](token, settings)) {
                obj.rerun.push(token)
              } else {
                obj.ignore.push(token)
              }
              return obj
            },
            {
              ignore: [],
              rerun: []
            }
          )
          if (!sortedErrors.rerun.length) {
            return Promise.resolve({
              firstRunErrors: errors,
              ignoredErrors: sortedErrors.ignore,
              secondRunErrors: [],
              secondRun: false
            })
          }
          const tokensToRetry = sortedErrors.rerun.map(({ token }) => token)
          return this.enqueue(
            'Retrying throttle errors',
            this.upload,
            tokensToRetry,
            2,
            1000,
            true
          ).then(() => {
            return Promise.resolve({
              firstRunErrors: errors,
              ignoredErrors: sortedErrors.ignore,
              secondRunErrors: this.errors.length
                ? this._reduceErrorMessagesToArray(false)
                : [],
              secondRun: true
            })
          })
        })
        .then(
          ({ firstRunErrors, ignoredErrors, secondRunErrors, secondRun }) => {
            if (secondRun) {
              output.uploadErrors(
                firstRunErrors.map(({ message }) => message),
                'First Run Errors:'
              )
              output.warning(
                'We retried certain failed uploads in a second run'
              )
              const secondRoundErrors = ignoredErrors
                .map(({ message }) => `(Ignored) ${message}`)
                .concat(secondRunErrors.map(({ message }) => message))
              output.uploadErrors(
                secondRoundErrors.length
                  ? secondRoundErrors
                  : ['All errors were resolved!'],
                'Second Run Errors:'
              )
            }
            !this.isOnlyOneFile && output.completedAction('Upload completed')
            return Promise.resolve({
              firstRunErrors,
              secondRunErrors
            })
          }
        )
    },

    /**
     * Uses "throttleQueue" to run a method ("action") a
     * certain number of times per interval. This allows us
     * to throttle our calls to the Shopify API and relay
     * the progress of the queue to the user via a callback.
     *
     * @param {Function} action
     * @param {Array} files
     * @param {Integer} requestsPerInterval
     * @param {Integer} interval
     * @param {Boolean} evenlyDistributedUpload
     * @returns Null (Promise)
     */
    enqueue(
      title = 'Uploading',
      action = function () {},
      files = [],
      requestsPerInterval,
      interval,
      evenlyDistributedUpload
    ) {
      if (!this.isOnlyOneFile && interval / requestsPerInterval < 200) {
        output.warning(
          'An interval of less than 200ms can create performance issues.',
          true
        )
      }
      !this.isOnlyOneFile &&
        (this.uploadCompleteCallback = this._generateUploadCompleteCallback(
          title,
          files.length,
          requestsPerInterval,
          interval
        ))
      let completed = 0
      const throttle = throttledQueue(
        requestsPerInterval,
        interval,
        evenlyDistributedUpload
      )
      return new Promise(async (resolve) => {
        for (let i = 0; i < files.length; i++) {
          throttle(() => {
            action(files[i]).finally(() => {
              completed++
              this.uploadCompleteCallback &&
                this.uploadCompleteCallback(files.length - completed, files[i])
              if (completed === files.length) {
                resolve()
              }
            })
          })
        }
      })
    },

    /**
     * This method handles the API call that uploads
     * the file to Shopify.
     *
     * Here, we cater to a super weird nuance of the asset API
     * where attempting to update Shopify Plus checkout template
     * using "attachment" returns success but does nothing.
     *
     * @param {Object} token details on the file to upload
     * @returns {Object} token
     */
    upload(token) {
      const isCheckout = token.theme === 'layout/checkout.liquid'
      const encoded = isCheckout
        ? typeof token.content !== 'undefined'
          ? token.content
          : fs.readFileSync(token.original, 'utf-8')
        : typeof token.content !== 'undefined'
        ? Buffer.from(token.content, 'utf-8').toString('base64')
        : Buffer.from(fs.readFileSync(token.original), 'utf-8').toString(
            'base64'
          )

      return shopifyApiRequest(
        'PUT',
        `/themes/${settings.theme}/assets.json`,
        {
          asset: {
            key: token.theme,
            [isCheckout ? 'value' : 'attachment']: encoded
          }
        },
        settings
      )
        .then(({ errors: error, asset }) => {
          if (error) {
            this.errors.push({ token, error })
          }
          return Promise.resolve({ token })
        })
        .catch((error) => {
          this.errors.push({ token, error })
          return Promise.resolve({ token })
        })
    },

    /**
     * Bind the context of this object's methods
     * explicitly to this object.
     */
    _bindContext() {
      this.enqueue = this.enqueue.bind(this)
      this.upload = this.upload.bind(this)
      this._generateUploadCompleteCallback =
        this._generateUploadCompleteCallback.bind(this)
      this._reduceErrorMessagesToArray =
        this._reduceErrorMessagesToArray.bind(this)
    },

    /**
     * Resets "this.errors" and generates a new instance
     * of a progress bar that is used to relay progress
     * to the user.
     *
     * @param {Integer} total Total files to upload
     * @returns {Function} callback
     */
    _generateUploadCompleteCallback(
      title = 'Uploading',
      total,
      requestsPerInterval,
      interval
    ) {
      this.errors = []

      const update = output.progressBar(
        `${title} (${requestsPerInterval}/${interval}ms)`,
        total,
        settings.isCI() || settings['debug.showDeploymentLog']
      )
      return (remaining, token) => {
        update(
          total - remaining,
          {
            errors: this.errors.length
          },
          token
        )
      }
    },

    /**
     * Take an array of errors that has been added to as we
     * have been consuming the queue and flatten into an
     * array that can be nicely presented to the user.
     *
     * @param {Boolean} shouldRenderOutput Send message to terminal
     * @returns {Object} Formatted messages with connected tokens.
     */
    _reduceErrorMessagesToArray(shouldRenderOutput = true) {
      const messages = this.errors.reduce((array, { error, token }) => {
        if (typeof error === 'string') {
          array.push({ token, message: `[${token.theme}] ${error}` })
          return array
        }

        const multipleMessages = Object.keys(error).reduce((_array, key) => {
          _array.push({
            token,
            message:
              `[${token.theme}] ` +
              (typeof error[key] === 'string'
                ? error[key]
                : error[key].join(', '))
          })
          return _array
        }, [])

        array = array.concat(multipleMessages)
        return array
      }, [])
      shouldRenderOutput &&
        output.uploadErrors(messages.map(({ message }) => message))
      return messages
    }
  }
}
