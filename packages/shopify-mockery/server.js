const connect = require('connect')
const http = require('http')
const Liquid = require('liquid')

const app = connect()
const engine = new Liquid.Engine()

app.use(function(req, res){
  engine
    .parseAndRender('hi {{name}}', { name: 'tobi' })
    .then(result => res.end(result))
})

module.exports = () => {
  http.createServer(app).listen(8080)
}

