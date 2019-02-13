import React, { Component } from 'react';

class CalculatorResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0
    };
  }

  resetResult() {
    this.setState({
      result: 0
    });
  }

  setResult(_result) {
    this.setState({
      result: _result
    });
  }

  render() {
    return (
      <div className="calculator-result__group">
        {this.props.total}
      </div>
    );
  }
}

export default CalculatorResult;
