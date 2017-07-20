// const article = require('./article')
const users = require('./signup')
const signin = require('./signin')

module.exports = app => {
  app.use(users)
  app.use(signin)
}
