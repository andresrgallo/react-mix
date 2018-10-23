import React from 'react';

class Formemployee extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      position: '',
    };
    this.state = this.initialState;
  }

  handleChange = e => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  };

  handleSubmit = e => {
    const state = this.initialState;
    this.props.submitForm(this.state);
    this.setState(state);
    e.preventDefault();
  };

  render() {
    const {name, position} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="m-2">
          <div>
            <label>Employee Name: </label>
          </div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <div>
            <label>Position: </label>
          </div>
          <input
            type="text"
            name="position"
            value={position}
            onChange={this.handleChange}
          />
          <div>
            <input
              className="btn btn-warning m-2"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Formemployee;
