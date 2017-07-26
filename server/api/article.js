const express = require('express')
const router = express.Router()
const db = require('../db/db')

//新建文章
router.post('/api/createArticle', (req, res)=>{
  const {title, content, username} = req.body
  new db.Article({title, content, username}).save().then((product)=>{
    db.User.findOne({username: product.username}, (err, doc)=>{
      doc.article.push(product._id)
      doc.save().then(()=>{
        res.status(200).send({articleId: product._id})
      })
    })
  })
})
//查询文章
router.get('/api/findArticle', (req, res)=>{
  const { articleId } = req.query
  db.Article.findOne({_id: articleId}, (err, doc)=>{
    const {title, content} = doc
    res.status(200).send({title, content})
  })
})
//获取文章列表
router.get('/api/articleList', (req, res)=>{
  const { username } = req.query
  if(username){
    db.User.findOne({username})
           .populate({path: 'article'})
           .exec((err, article)=>{
             res.status(200).send({articleList: article.article})
           })
  }else{
    db.Article.find((err, articleList)=>{
      if(err){
        console.error(err)
        return
      }else{
        res.status(200).send({articleList})
      }
    })
  }
  
})


module.exports = router