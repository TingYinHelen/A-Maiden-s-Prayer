const express = require('express')
const router = express.Router()

router.post('/api/createArticle', (req, res)=>{
  console.log(req.body)
  res.status(200).send('接收到数据')
})

module.exports = router