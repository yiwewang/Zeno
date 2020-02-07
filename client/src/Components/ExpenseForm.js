import React, {Component} from "react";

class ExpenseForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			item: '',
			category: {},
			amount: '',
			tag: {},
			date: ''
		};
		// this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		alert('Expense submitted: ' + this.state.item);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
        
          <input placeholder="Item" type="text" ref={this.state.item} />
          <select name="category" class="ghost-input" id="category-select">
	          <option disabled selected value>Category</option>
	          <option value="grocery">Groceries</option>
	          <option value="restaurant">Restaurant</option>
	          <option value="clothes">Clothes</option>
	          <option value="other-shopping">Other Shopping</option>
	          <option value="transportation">Transportation</option>
	          <option value="entertainment">Entertainment</option>
	          <option value="medical">Medical</option>
	          <option value="travel">Travel</option>
	          <option value="personal-care">Personal Care</option>
	          <option value="pet">Pet</option>
	          <option value="fine">Fine</option>
	        </select>
          <input placeholder="Amount" type="number" ref={this.state.amount} />
          <input placeholder="Tag" type="text" ref={this.state.tag} />
          <input placeholder="Date" type="date" ref={this.state.date} />
        
        <input type="submit" value="Submit" />
      </form>
		);
	}
};
export default ExpenseForm;