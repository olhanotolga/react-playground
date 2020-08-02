import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <section className="component">
        <header>
          <h1>Counter (ultimate time-waster)</h1>
        </header>
        <div className="counter-body">
          <span>Counter: {this.state.count}</span>
          <button className="inc-dec-btn" onClick={this.increment}>+</button>
          <button className="inc-dec-btn" onClick={this.decrement}>-</button>
        </div>
        <button className="reset-btn" onClick={this.reset}>Reset</button>
        
      </section>
    );
  }
}

export default Counter;
