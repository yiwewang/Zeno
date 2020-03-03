import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ExpenseForm from './Components/ExpenseForm';
import SpendingDetails from './Components/SpendingDetails';


class App extends Component {
    render(){
        return (
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/form' component={ExpenseForm} />
					<Route exact path='/spending-details' component={SpendingDetails} />
				</Switch>
			</Router>
        );
    }
}

export default App;