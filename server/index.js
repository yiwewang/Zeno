const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost/Expense'
const cors = require('cors')
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended: true})) //middle-ware
app.use(bodyParser.json());
app.use(express.static('public'))
app.set('view engine','ejs')
app.use('/', routes)

var collection;
mongoClient.connect(url, {useUnifiedTopology: true},function(err, client){
	if(err) { return console.log('Unable to connect to DB server', err)}
	
	const db = client.db('Zeno');
	collection = db.collection('expenses');
	//read from db
	// collection.find({}).toArray(function(err, expenses){

	// 	expenses.forEach(function(expense){
	// 		console.log(expense.item + " " + expense.amount);
	// 	});
	// });
	app.listen(port, () => console.log(`Zeno listening on port ${port}!`))
});

// app.get('/', (req, res) => res.render('index'))

app.post('/form', function (req, res) {
	//construct schema for expense
	const request = req.body;
	console.log(request);
	// console.log(new Date(request.date).getFullYear());  -- use Date 

	// var tag = request.tag.toString().split(";");
	// const expense = {
	// 	item: request.item,
	// 	category: request.category,
	// 	amount : request.amount,
	// 	date: request.date,
	// 	tag: tag
	// };
  	
 //  	collection.insertOne(expense, (err, result) => {
 //  		if (err) return console.log(err);
 //  		console.log(result.ops);
 //  		res.redirect('/');
 //  	});
 	res.json("we got your request!")
})

