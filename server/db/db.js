const mongoose = require('mongoose')
const Schema = mongoose.Schema

//存储文章
const ArticleSchema = new Schema(
  {
    title: String,
    content: String
  }
)

//用户注册
const UserSchema = new Schema(
  {
    username: String,
    password: String
  }
)
const Models = {
  User: mongoose.model('User', UserSchema),
  Article: mongoose.model('Article', ArticleSchema)
}

mongoose.connect('mongodb://127.0.0.1/my-blog', {useMongoClient: true})

const db = mongoose.connection

db.on('error',console.error.bind(console,'Database connection error.'));
db.once('open', () => {
    console.log('The database has connected.')
});


module.exports = Models