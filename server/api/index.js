// const article = require('./article')
const users = require('./signup')
const signin = require('./signin')
const article = require('./article')

module.exports = app => {
  app.use(users)
  app.use(signin)
  app.use(article)
}
