const express = require('express')
const router = express.Router()
router.post('/api/test', (req, res)=>{
  console.log(req.body)
  res.status(200).send('hahaha, success!!')
})
module.exports = router