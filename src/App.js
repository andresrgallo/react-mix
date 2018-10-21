import React, {Component} from 'react';
import './App.css';
import Counter from './components/counter';
import Employees from './components/employees';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <div>
          <Link to="/counter">Counter</Link>
        </div>
        <div>
          <Link to="/employees">Employees</Link>
        </div>
        <Route path="/counter" component={Counter} />
        <Route path="/employees" component={Employees} />
      </div>
    );
  }
}

export default App;
