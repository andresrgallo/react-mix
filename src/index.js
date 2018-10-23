import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './components/users';
import Contact from './components/contact';
import Notfound from './components/notFound';
import Counter from './components/counter';
import NavBar from './components/navbar';
import Employees from './components/employees';
import Fetchwiki from './components/fetchWiki';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/counter" component={Counter} />
        <Route path="/employees" component={Employees} />
        <Route path="/fetchwiki" component={Fetchwiki} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
