// server.js
console.log('May Node be with you')

const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();


const uri = "mongodb+srv://dbUserMain:LqkWoMZFR8eNb4Ds@cluster0.rjk5v.mongodb.net/cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("Cluster0").collection("quotes");

  const db = client.db('Cluster0')
  const quotesCollection = db.collection('quotes')
  
  // perform actions on the collection object
  client.close();

  MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    
    const db = client.db('Cluster0')
    const quotesCollection = db.collection('quotes')
          
  })
  .catch(error => console.error(error))


});



app.listen(3000, function() {
    console.log('listening on 3000')
  })


app.get('/', (req, res) => {
    res.sendFile('/Users/benjamintovar/desktop/crudapp1' + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {/*...*/})
app.post('/quotes', (req, res) => {console.log(req.body)})

app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
  })









