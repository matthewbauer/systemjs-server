var ecstatic = require('ecstatic')
var express = require('express')
var app = express()
var pluginServer = require('./plugin-server.js')

app.use(ecstatic({
  root: process.cwd()
}))
app.use(pluginServer({
  root: process.cwd()
}))

app.listen(process.env.PORT || 8080)
