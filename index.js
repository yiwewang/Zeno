const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost/Expense'

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine','ejs')

mongoClient.connect(url, {useUnifiedTopology: true},function(err, client){
	if(err) {console.log('Unable to connect to DB server', err)}
	else{
		//read from db
		const db = client.db('Zeno');
		const collection = db.collection('expenses');
		collection.find({}).toArray(function(err, expenses){
			expenses.forEach(function(expense){
				console.log(expense.item + " " + expense.amount);
			});
		});
	};
});

app.get('/', (req, res) => res.render('index'))
app.post('/', function (req, res) {
  //console.log(req.body);
  res.render('index');  
})
app.listen(port, () => console.log(`Zeno listening on port ${port}!`))





