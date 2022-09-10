/* eslint-disable @typescript-eslint/no-unsafe-argument */
const express = require('express');
const cors = require('cors');
// const app = express()
const createServer = require('./services/server');
const app = createServer()
const port = 5011
const routes = require('./routes/router');
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/start', routes)
app.set("view engine", "ejs"); // Setting EJS as template engine

app.set("views", __dirname + "/views");
app.get('/', (req, res) => {
  res.send('Lab 3 web server')
})


app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
