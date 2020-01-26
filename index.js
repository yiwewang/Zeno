const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost/Expense'

app.use(bodyParser.urlencoded({extended: true})) //middle-ware
app.use(express.static('public'))
app.set('view engine','ejs')

var collection;
mongoClient.connect(url, {useUnifiedTopology: true},function(err, client){
	if(err) { return console.log('Unable to connect to DB server', err)}
	//read from db
	const db = client.db('Zeno');
	collection = db.collection('expenses');
	collection.find({}).toArray(function(err, expenses){

		expenses.forEach(function(expense){
			console.log(expense.item + " " + expense.amount);
		});
	});
	app.listen(port, () => console.log(`Zeno listening on port ${port}!`))
});

app.get('/', (req, res) => res.render('index'))
app.post('/expense', function (req, res) {
  	collection.insertOne(req.body, (err, result) => {
  		if (err) return console.log(err);
  		console.log('save to db.');
  		res.redirect('/');
  	});
})






