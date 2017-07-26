const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.post('/api/signin', (req, res)=>{
  db.User.findOne({username: req.body.username}, (err, doc)=>{
    if(err){
      console.error(err)
    }else if(doc && doc.password == req.body.password){
      res.status(200).send({
        username: doc.username,
        id: doc._id
      })
    }
  })
})
module.exports = router