const express = require('express')
const app = express()
const route = require('./api/index.js')

route(app)

app.listen(3000, ()=>{
  console.log('GetData http://localhost:3000')
})