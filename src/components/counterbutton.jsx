import React, {Component} from 'react';

class Counterbutton extends Component {
  incrementClick = () => {
    this.props.onIncrement(this.props.index);
  };
  render() {
    let {value} = this.props;
    return (
      <div>
        <span
          className={
            value === 0
              ? 'badge badge-pill badge-warning'
              : 'badge badge-pill badge-primary'
          }>
          {value === 0 ? (value = 'Zero') : value}
        </span>{' '}
        <button className="btn btn-info btn-sm" onClick={this.incrementClick}>
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.index)}>
          Delete Button
        </button>
      </div>
    );
  }
}

export default Counterbutton;
