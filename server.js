const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://yoda:12345@cluster0.q1ybi.mongodb.net/investments?retryWrites=true&w=majority'
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true}))
app.set('view engine', 'ejs')
MongoClient.connect(connectionString,{
    useUnifiedTopology: true
  }).then(client => {
      console.log('Connected to DB')
      const db = client.db('investments')
      const collection = db.collection('data')
      app.post('/data', (req, res) => {
        collection.insertOne(req.body)
          .then(result => {
            res.redirect('/confirm')
          })
          .catch(error => console.error(error))
      })
      app.get('/entries', (req, res) => {
        collection.find().toArray()
          .then(results => {
            res.render('entries.ejs', { entries: results })
          })
          .catch()
      })
  })

app.listen(port, function() {
    console.log('listening on port 3000')
})

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
})

app.get('/confirm', function (request, response) {
    response.sendFile(__dirname + '/confirm.html')
})


app.get('/validation.js', function (request, response) {
    response.sendFile(__dirname + '/validation.js')
})