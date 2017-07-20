const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/api/signup', (req, res)=>{
  const {username, password} = req.body
  const userDb = new db.User({username, password})
  userDb.save()
  res.status(200).send({content: 'success'})
})

module.exports = router