const FormRouter = require("express").Router();


FormRouter.route('/form')
	.get(function(req, res){
		res.send('get form!');
	})
	.post(function(req, res){
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
	});


module.exports = FormRouter;