const test = require('ava')
const { filterOutIgnoredFiles } = require('./../shopify-kit')

const FILES_INPUT = [
  {
    theme: 'config/settings_schema.json'
  },
  {
    theme: 'config/settings_data.json'
  },
  {
    theme: 'templates/index.json'
  },
  {
    theme: 'templates/product.json'
  },
  {
    theme: 'templates/product.liquid'
  }
]

test.serial('Filters out files with exact match', async (t) => {
  const filesAfterFiltering = await filterOutIgnoredFiles(FILES_INPUT, [
    'config/settings_data.json'
  ])
  t.deepEqual(filesAfterFiltering, [
    { theme: 'config/settings_schema.json' },
    { theme: 'templates/index.json' },
    { theme: 'templates/product.json' },
    { theme: 'templates/product.liquid' }
  ])
})

test.serial('Filters out files with simple glob match', async (t) => {
  const filesAfterFiltering = await filterOutIgnoredFiles(FILES_INPUT, [
    /templates\/.*[.]json/
  ])
  t.deepEqual(filesAfterFiltering, [
    { theme: 'config/settings_schema.json' },
    { theme: 'config/settings_data.json' },
    { theme: 'templates/product.liquid' }
  ])
})

test.serial('Filters out files with two or more rules', async (t) => {
  const filesAfterFiltering = await filterOutIgnoredFiles(FILES_INPUT, [
    'config/settings_data.json',
    /templates\/.*[.]json/
  ])
  t.deepEqual(filesAfterFiltering, [
    { theme: 'config/settings_schema.json' },
    { theme: 'templates/product.liquid' }
  ])
})
