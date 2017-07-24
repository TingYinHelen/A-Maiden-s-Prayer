const express = require('express')
const router = express.Router()
const db = require('../db/db')

//新建文章
router.post('/api/createArticle', (req, res)=>{
  const {title, content} = req.body
  // console.log(title, content)
  new db.Article({title, content}).save()
  res.status(200).send('save success!')
})
//获取文章列表
router.get('/api/articleList', (req, res)=>{
  article.find((err, articleList)=>{
    if(err){
      console.error(err)
      return
    }else{
      res.status(200).send(articleList)
    }
  })
})


module.exports = router