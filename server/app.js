const express = require('express')
const app = express()
const route = require('./api/index.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

route(app)
app.listen(3000, ()=>{
  console.log('GetData http://localhost:3000')
})