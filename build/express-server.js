var path = require('path')
var express = require('express')


// default port where dev server listens for incoming traffic
var port = 8888

var app = express()


// serve pure static assets
app.use(express.static('dist'))

var uri = 'http://localhost:' + port


console.log('server listenning at:' + uri)
var server = app.listen(port)

module.exports = {

}
