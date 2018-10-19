import React from 'react';
import {Route, Link} from 'react-router-dom';

class Users extends React.Component {
  render() {
    //check users/:id param
    const {url} = this.props.match;
    return (
      <div>
        <h1>Users</h1>
        {/*<p>{this.props.match.params.id}</p>*/}
        <strong>Select a user</strong>
        <ul>
          <li>
            <Link to="/users/1">User 1</Link>
          </li>
          <li>
            <Link to="/users/2">User 2</Link>
          </li>
          <li>
            <Link to="/users/3">User 3</Link>
          </li>
        </ul>
        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}

const User = props => {
  const {match} = props;
  console.log('user', props);
  return <h1>{match.params.id}</h1>;
};

export default Users;
