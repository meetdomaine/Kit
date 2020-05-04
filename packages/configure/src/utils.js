const { exec } = require('child_process')

const reverseSlashes = (path) => {
  return path.replace(/\\/g, '/')
}

const getCommit = () => {
  return new Promise((resolve) => {
    exec('git rev-parse HEAD | cut -c1-7', (err, stdout, stderr) => {
      resolve(stdout.trim())
    })
  })
}

const getDate = () => {
  return new Promise((resolve) => {
    exec("date +'%m.%d.%y'", (err, stdout, stderr) => {
      resolve(stdout.trim())
    })
  })
}

const getBranch = () => {
  return new Promise((resolve) => {
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
      resolve(stdout.trim())
    })
  })
}

const getUsername = () => {
  return new Promise((resolve) => {
    exec('git config user.name', (err, stdout, stderr) => {
      resolve(stdout.trim())
    })
  })
}

module.exports = {
  reverseSlashes,
  getCommit,
  getDate,
  getBranch,
  getUsername
}