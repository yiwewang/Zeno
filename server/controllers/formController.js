var Form = require('../models/Form');

exports.form_list_by_date = funtion(req, res, next){
	var datesort = {date, 1};
	Form.find({}).sort(datesort);
}