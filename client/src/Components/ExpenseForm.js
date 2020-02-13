import React, {Component} from "react";

class ExpenseForm extends Component{

	constructor() {
    super();
    this.state = {
		item: '',
		category: [],
		amount: '',
		tag: [],
		date: ''
	};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
	
  	handleInputChange(event) {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
    	const name = target.name;
    	console.log(value + "  value");
	    this.setState({
	      [name]: value
	    });
	  }

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.item + '     data');
		fetch('/api/form', {
			method: 'POST',
			headers: {     'Accept': 'application/json',     'Content-Type': 'application/json',   },
			body: JSON.stringify(this.state)
		});
	}

	render() {

		const ref = React.createRef();
		return (
			<form onSubmit={this.handleSubmit}>

			<input placeholder="Item" className="ghost-input" type="text" name="item" value={this.state.item} onChange={this.handleInputChange}  />
			<select name="category" class="ghost-input" id="category-select" >
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
			<input placeholder="Amount" class="ghost-input" type="number" ref={this.state.amount} />
			<input placeholder="Tag" class="ghost-input" type="text" ref={this.state.tag} />
			<input placeholder="Date" class="ghost-input" type="date" ref={this.state.date} />

			<input type="submit" class="ghost-button" value="Submit" />
			</form>
			);
		}
	};
export default ExpenseForm;