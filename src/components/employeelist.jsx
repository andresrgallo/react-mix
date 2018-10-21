import React from 'react';

const employeelist = props => {
  const list = props.employees.map((employee, index) => {
    return (
      <tr key={index}>
        <th>{employee.name}</th>
        <th>{employee.position}</th>
        <th>
          <button className="btn btn-danger m-2">Delete</button>
        </th>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

export default employeelist;
