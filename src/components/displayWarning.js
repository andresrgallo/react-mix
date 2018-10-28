import React, {Component} from 'react';
import Warn from './warn';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warn: true,
      classAttribute: 'btn btn-warning m-2',
    };
  }

  handleClick = () => {
    let classAttribute = this.state.classAttribute;
    console.log('warn', this.state.warn);
    //classAttribute = this.state.warn
    // ? 'btn btn-warning m-2'
    // : 'btn btn-danger m-2';
    console.log('handle', classAttribute);
    this.setState(state => ({warn: !this.state.warn}));
  };

  render() {
    const {warn, classAttribute} = this.state;
    return (
      <div>
        <Warn warn={warn} />
        <button
          onClick={this.handleClick}
          className={
            this.state.warn ? 'btn btn-warning m-2' : 'btn btn-danger m-2'
          }>
          {warn ? 'Cool Down' : 'Warn!'}
        </button>
      </div>
    );
  }
}
