const express = require('express')
const cors = require('cors')

// import { v1Router } from '..'

function createServer() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.get('/', (req, res) => {
    res.send('start server')
  })
  app.set("view engine", "ejs"); // Setting EJS as template engine

  app.set("views", __dirname + "/views");
  // app.use('/api/v1/', v1Router)

  return app
}

module.exports = createServer
