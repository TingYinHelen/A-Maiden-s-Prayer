const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
  title: String,
  content: String
})
const article = mongoose.model('article', articleSchema)

mongoose.connect('mongodb: //localhost/test')
const db = mongoose.connection
db.on('error', console.error('数据库连接错误'))
db.once('open', ()=>{
  console.log('数据库连接成功')
})

module.exports = article