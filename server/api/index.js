const article = require('./article')
console.log(article)
module.exports = app => {
  app.use(article)
}
