const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema(
  {
    title: String,
    content: String
  },
  { versionKey: false }
)
const article = mongoose.model('article', articleSchema)

mongoose.connect('mongodb://127.0.0.1/my-blog', {useMongoClient: true})

const db = mongoose.connection

db.on('error',console.error.bind(console,'Database connection error.'));
db.once('open', () => {
    console.log('The database has connected.')
});

module.exports = article