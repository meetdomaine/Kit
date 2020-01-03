const objectPath = require('object-path')
const locale = require('./src/locales/en.default.json')
const staticTranslations = require('./data/translations')
const fs = require('fs')

Object.keys(staticTranslations).map(key => {
  objectPath.set(locale, key, staticTranslations[key])
})

const json = JSON.stringify(locale, null, 2)
fs.writeFile('./src/locales/en.default.json', json, 'utf8', () => {
  console.dir('done')
})
