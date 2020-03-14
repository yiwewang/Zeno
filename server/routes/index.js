const router = require('express').Router();
const form = require('./form');

router.use('/form', form);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('can you hear me?');
});

router.post('/', function(req, res, next) {
  console.log('console to post form');

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

module.exports = router;