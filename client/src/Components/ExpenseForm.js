import React, {Component} from "react";

class ExpenseForm extends Component{

	constructor() {
		super();
		this.state = {
			item: '',
			categories: ["Groceries", "Restaurant", "Clothes", "Other Shopping", "Transportation", "Entertainment", "Medical", "Travel", "Personal Care", "Pet", "Fine"],
			amount: '',
			tag: [],
			date: '',
			category: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	
  	handleInputChange(event) {
	    const target = event.target;
    	const name = target.name;
	    const value = target.value;

    	console.log(value + "  value");
	    this.setState({
	      [name]: value,
	    });
	}




	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.item + '     data');
		fetch('/form', {
			method: 'POST',
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
			body: JSON.stringify(this.state)
		})
      .then(res => res.json())
      .then(
        (result) => {
          console.log("success!!!")
          console.log(result)
          this.setState({
          	item: '',
			amount: '',
			tag: [],
			date: '',
			category: ''
          })

        },
        (error) => {
          console.log("error")
          console.log(error)
        }
      );
	}

	render() {
		return (
			<form className="expense-form" onSubmit={this.handleSubmit}>

				<input placeholder="Item" className="ghost-input" type="text" name="item" value={this.state.item} onChange={this.handleInputChange}  />
				<select onChange={({ target }) => { this.setState({ category: target.value }) }} name="category" className="ghost-input" id="category-select" value={this.state.category} >
					<option disabled value="">Category</option>
					{
						this.state.categories.map((category, i) => {
							return <option key={i} value={category}>{category}</option>
						})
					}
				</select>
				<input onChange={this.handleInputChange} placeholder="Amount" name="amount" className="ghost-input" type="number" value={this.state.amount} />
				<input onChange={this.handleInputChange} placeholder="Tag" name="tag" className="ghost-input" type="text" value={this.state.tag} />
				<input onChange={this.handleInputChange} placeholder="Date" name="date" className="ghost-input" type="date" value={this.state.date} />

				<input type="submit" className="ghost-button" value="Submit" />
			</form>
			);
		}
	};
export default ExpenseForm;