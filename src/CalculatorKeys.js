import React, { Component } from 'react';
import CalculatorKey from './CalculatorKey';

class CalculatorKeys extends Component {
  render() {
    return (
      <div className="calculator__keys">
        <CalculatorKey label="AC" altLabel="C" value="clear" header="true" action={this.props.prepareResult} />
        <CalculatorKey label="±" value="sign" header="true" action={this.props.prepareResult} />
        <CalculatorKey label="%" value="percentage" header="true" action={this.props.prepareResult} />
        <CalculatorKey label="÷" value="/" operator="true" action={this.props.prepareResult} />
        <CalculatorKey label="7" action={this.props.prepareResult} />
        <CalculatorKey label="8" action={this.props.prepareResult} />
        <CalculatorKey label="9" action={this.props.prepareResult} />
        <CalculatorKey label="&times;" value="*" operator="true" action={this.props.prepareResult} />
        <CalculatorKey label="4" action={this.props.prepareResult} />
        <CalculatorKey label="5" action={this.props.prepareResult} />
        <CalculatorKey label="6" action={this.props.prepareResult} />
        <CalculatorKey label="–" value="-" operator="true" action={this.props.prepareResult} />
        <CalculatorKey label="1" action={this.props.prepareResult} />
        <CalculatorKey label="2" action={this.props.prepareResult} />
        <CalculatorKey label="3" action={this.props.prepareResult} />
        <CalculatorKey label="+" operator="true" action={this.props.prepareResult} />
        <CalculatorKey label="0" span="2" action={this.props.prepareResult} />
        <CalculatorKey label="," value="." action={this.props.prepareResult} />
        <CalculatorKey label="=" operator="true" action={this.props.prepareResult} />
      </div>
    );
  }
}

export default CalculatorKeys;
