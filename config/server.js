const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const routes = require('../routes/routes')
var cors = require('./cors');  
const auth = require('./auth.js')
const AuthService = require('./authService.js')


const apiProtected = express.Router()

server.use(cors);

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())




server.use('/api',apiProtected)

apiProtected.use(auth)

apiProtected.use(routes)


  


// API PUBLICA

const openApi = express.Router()
server.use('/oapi', openApi)

openApi.post('/login', AuthService.login)

openApi.post('/validateToken', AuthService.validateToken)









server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})
