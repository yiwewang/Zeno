var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
	item: String,
	category: String,
	amount: Number,
	tags: [String],
	date: {
		type: Date,
		defaut: Date.now
	}
},{
	collection:'Expenses'
});

mongoose.model('Expense', ExpenseSchema);
