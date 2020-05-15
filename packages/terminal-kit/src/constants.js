module.exports = {
  messages: {
    configure: {
      title: 'Reading configuration file',
      instruction:
        'Kit expects there to be either a config.yml or a kit.config.js file at the root of the theme. This file should have a group of settings for each environment (production, development, staging). The current environment set is "{env}" and it looks like the necessary settings have not been found. Review your configuration file and try again.'
    },
    compile: {
      title: 'Running "{action}" action'
    }
  }
}
