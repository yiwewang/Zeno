var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormSchema = new Schema({
	item: String,
	category: [String],
	amount: Number,
	tags: [String],
	date: Date,
});

mongoose.model('Form', FormSchema);
