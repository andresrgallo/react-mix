import React from 'react';
import Formemployee from './formemployee';
import Employeelist from './employeelist';

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  handleSubmit = data => {
    const {employees} = this.state;
    employees.push(data);
    this.setState({employees});
  };

  render() {
    const {employees} = this.state;
    return (
      <div>
        <h1>Employees</h1>
        <p>Add an employee and his position</p>
        <Employeelist employees={employees} />
        <Formemployee submitForm={this.handleSubmit} />
      </div>
    );
  }
}
export default Employees;
