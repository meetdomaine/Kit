const nodemon = require('nodemon')
// const server = require('./server')

module.exports = (settings) => {
  require('./server')(settings)
  // console.log(nodemon)
  // nodemon({
  //   script: `${__dirname}/server.js`,
  //   watch: `${settings['path.src']}`
  // });

  // nodemon.on('start', function () {
  //   console.log('App has started');
  // }).on('quit', function () {
  //   console.log('App has quit');
  //   process.exit();
  // }).on('restart', function (files) {
  //   console.log('App restarted due to: ', files);
  // });
}