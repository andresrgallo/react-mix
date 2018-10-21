import React, {Component} from 'react';
import CountersList from './counterslist';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {index: 1, value: 0},
        {index: 2, value: 2},
        {index: 3, value: 0},
        {index: 4, value: 0},
      ],
    };
  }

  handleIncrement = i => {
    console.log('i', i);
    let {counters} = this.state;
    for (let c of counters) {
      if (c.index === i) {
        c.value++;
      }
    }
    this.setState({counters});
  };

  handleDelete = c => {
    let {counters} = this.state;
    counters = counters.filter(counter => counter.index !== c);
    this.setState({counters});
  };

  handleReset = () => {
    console.log('h');
    const {counters} = this.state;
    counters.forEach(c => (c.value = 0));
    this.setState({counters});
  };

  render() {
    const {counters} = this.state;
    const totalCounters = counters.filter(c => c.value !== 0).length;
    return (
      <div>
        <h1>Counters</h1>
        <p>
          Total active counters:{' '}
          <span className="badge badge-pill badge-success ml-2">
            {totalCounters}
          </span>
        </p>
        <CountersList
          counters={counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default Counter;
