import React, {Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
  }
  componentDidMount() {
    let trigger = setInterval(this.timeChange, 1000);
  }

  timeChange = () => {
    this.setState({time: new Date()});
  };

  render() {
    let {time} = this.state;

    return (
      <span class="btn btn-success m-2 clock">{time.toLocaleTimeString()}</span>
    );
  }
}

export default Clock;
