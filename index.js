const express = require('express')
const mongoose = require('mongoose')

let app = express()

let env = process.env.NODE_ENV || 'development'
let config = require(__dirname + '/server/config/config')[env]
require('./server/config/express')(app, config)
require('./server/config/routes')(app, config)


app.listen(3000, function () {
    console.log('Server listening on 3000')
})