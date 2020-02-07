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
          <input placeholder="Category" type="text" ref={this.state.category} />
          <input placeholder="Amount" type="number" ref={this.state.amount} />
          <input placeholder="Tag" type="text" ref={this.state.tag} />
          <input placeholder="Date" type="date" ref={this.state.date} />
        
        <input type="submit" value="Submit" />
      </form>
		);
	}
};
export default ExpenseForm;