const Expense = require('../models/Expense');
const mongoose = require('mongoose')

exports.create = function(req, res, next){
	const request = req.body
	// var tag = request.tag.toString().split(";");
	var tag = request.tag.toString().split(";")
	console.log(tag)
	const expenseData = {
				item: request.item,
				category: request.category,
				amount : request.amount,
				date:  request.date,
				tag: []
			};
	for(var i = 0; i < tag.length; i++){
			expenseData.tag.push(tag[i])
		}
	const expense = new Expense (expenseData);
	console.log(expense);

	expense.save(function (err){

		if (err) console.log(next(err))
 
		res.json({
			message: 'expense entry created. ',
			id: expense._id
		})
	})

}
