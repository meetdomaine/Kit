const fs = require('fs-extra')
const wait = require('w2t')
const fetch = require('node-fetch')
const output = require('@halfhelix/terminal-kit')

module.exports = function init (settings) {
  /**
   * filled on each sync request, emptied when successful
   */
  let queue = []
  let errors = []
  let successes = []

  function updateThemeName () {
    // @todo
    // return fetch(`https://${settings.store}/admin/themes/${settings.theme}.json`, {
    //   method,
    //   headers: {
    //     'X-Shopify-Access-Token': settings.password,
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify(body)
    // })
  }

  function api (method, body) {
    return fetch(`https://${settings.store}/admin/themes/${settings.theme}/assets.json`, {
      method,
      headers: {
        'X-Shopify-Access-Token': settings.password,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  function upload (token) {
    const encoded = (
      token.content
      ? Buffer.from(token.content, 'utf-8').toString('base64')
      : Buffer.from(fs.readFileSync(token.original), 'utf-8').toString('base64')
    )

    return api('PUT', {
      asset: {
        key: token.theme,
        attachment: encoded
      }
    })
      .then(response => {
        return response.json()
      })
      .then(({errors: error, asset}) => {
        if (error) {
          errors.push({token, error})
        } else {
          successes.push({token, asset})
        }
      })
      .catch(error => {
        errors.push({token, error})
      })
  }

  function enqueue (action, cb) {
    return new Promise((resolve, reject) => {
      ;(function push (token) {
        if (!token) resolve()

        wait(500, [
          action(token)
        ])
          .then(() => {
            cb && cb(queue.length)
            if (queue.length) return push(queue.pop())
            resolve()
          })
          .catch(error => {
            cb && cb(queue.length)
            if (queue.length) return push(queue.pop())
            reject(error)
          })
      })(queue.pop())
    })
  }

  function filterOutIgnored (paths) {
    return paths.filter(path => (
      !~settings.ignore.indexOf(path.theme)
    ))
  }

  function handleErrors () {
    errors.forEach(({error, token}) => {
      const messages = Object.keys(error).reduce((array, key) => {
        array.push(`[${token.theme}] ` + (
          typeof error[key] === 'string'
          ? error[key]
          : error[key].join(', ')
        ))
        return array
      }, [])
      output.uploadErrors(messages)
      return true
    })
  }

  function sync (paths = [], shouldUpdateThemeName = false) {
    queue = filterOutIgnored(paths)
    errors = [], successes = []

    if (!queue.length) {
      return Promise.resolve(false)
    }

    if (queue.length === 1) {
      var spinner = output.action(`Uploading "${paths[0].theme}"`)
      var cb = function () {}
    } else {
      var spinner = false
      var cb = (function () {
        const total = queue.length
        const update = output.progressBar('Uploading', total)
        return (remaining) => {
          update(total - remaining, {
            errors: errors.length
          })
        }
      })()
    }

    return enqueue(
      upload,
      cb
    ).then(() => {
      if (errors.length) {
        spinner && spinner.fail()
        handleErrors()
        !spinner && output.completedAction('Upload completed')
        return Promise.resolve(false)
      } else {
        spinner && spinner.succeed()
        return Promise.resolve(true)
      }
    })
  }

  return {
    sync
  }
}