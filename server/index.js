
const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')

const url = 'mongodb://localhost/Zeno'
const cors = require('cors')
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended: true})) //middle-ware
app.use(bodyParser.json());
app.use(express.static('public'))
app.set('view engine','ejs')
app.use('/', routes)

var collection;


mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true})
const connection = mongoose.connection
connection.on('error', err => {
  console.error('connection error:', err)
})
connection.once('open', _ => {
  console.log('Database connected:', url)

  collection = connection.db.collection('expenses');
  collection.find({}).toArray(function(err, expenses){

		expenses.forEach(function(expense){
			console.log(expense.item + " " + expense.amount);
		});
	});
})

app.listen(port, () => console.log(`Zeno listening on port ${port}!`))