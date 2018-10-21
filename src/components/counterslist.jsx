import React, {Component} from 'react';
import Counterbutton from './counterbutton';

class CountersList extends Component {
  render() {
    let {counters, onIncrement, onDelete, onReset} = this.props;
    counters = counters.map(counter => (
      <Counterbutton
        index={counter.index}
        key={counter.index}
        value={counter.value}
        onIncrement={onIncrement}
        onDelete={onDelete}
      />
    ));
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm ml-2"
          onClick={() => this.props.onReset()}>
          Reset
        </button>
        {counters}
      </div>
    );
  }
}

export default CountersList;
