// const noteRoutes = require('./note_routes');

// module.exports = function(app, db) {
// 	noteRoutes(app,db);

// }

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/api/branch', db.getBranch)
app.get('/api/search', db.SearchbyValue)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})