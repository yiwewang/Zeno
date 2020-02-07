import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles.css';
import ExpenseForm from './Components/ExpenseForm';


class App extends Component {
    render(){
        return (
        <Router>
            <Switch>
                <Route path='/form' component={ExpenseForm} />
            </Switch>
        </Router>
        );
    }
}

export default App;
