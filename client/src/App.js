import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import Navbar from './Components/Navbar';


class App extends Component {
    render(){
        return (
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/form' component={ExpenseForm} />
				</Switch>
			</Router>
        );
    }
}

export default App;