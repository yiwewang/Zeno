var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
	item: String,
	category: String,
	amount: Number,
	tags: [{type: String}],
	date: {
		type: Date,
		defaut: Date.now
	}
}, {
    collection: 'expenses'  
});

module.exports = mongoose.model('Expense', ExpenseSchema);
