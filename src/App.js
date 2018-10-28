import React, {Component} from 'react';
import './App.css';
import Counter from './components/counter';
import Employees from './components/employees';
import Fetchwiki from './components/fetchWiki';
import Displaywarning from './components/displayWarning';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1 class="display-4 text-center m-2">Home</h1>
        <Displaywarning />
        <div>
          <Link class="m-3" to="/counter">
            Counter
          </Link>
        </div>
        <div>
          <Link class="m-3" to="/employees">
            Employees
          </Link>
        </div>
        <div>
          <Link class="m-3" to="/fetchwiki">
            Fetch Wiki
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
