import React from 'react';
class Contact extends React.Component {
  handleSubmit = () => {
    //redirect user to home page
    this.props.history.push('/');
  };

  render() {
    return (
      <form>
        <input placeHolder="name" type="text" />
        <input placeHolder="email " type="email" />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
export default Contact;
