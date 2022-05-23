const fs = require('fs')

const data = fs.readFileSync('./logs/POST_FILE_FILTER_OUTPUT.json', {
  encoding: 'utf8',
  flag: 'r'
})

const dataAsJson = JSON.parse(data)

dataAsJson.forEach((token) => {
  if (token.theme === 'templates/index.json') {
    console.log('templates/index.json should be ignored')
    process.exit(1)
  }
})

console.log('Post deployment check completed')
