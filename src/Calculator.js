import React, { Component } from 'react';
import './Calculator.css';
import CalculatorResult from './CalculatorResult';
import CalculatorKeys from './CalculatorKeys';
import mathjs from 'mathjs';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type !== 'basic' ? props.type : 'basic',
      calculation: [],
      result: 0
    };

    this.prepareResult = this.prepareResult.bind(this);
    this.setResult = this.setResult.bind(this);
    this.clearCalculation = this.clearCalculation.bind(this);
  }

  prepareResult(_key) {
    let _value = _key.props.value !== undefined ? _key.props.value : _key.props.label;
    let _operator = !!_key.props.operator;
    let _header = !!_key.props.header;
    
    switch (_value) {
      case 'clear': {
        this.clearCalculation();
        this.setResult(0);
        return;
      }
      case '=': {
        if (this.state.result && this.state.result.length > 0) {
          this.setState({
            result: this.calculateTotal()
          });
          this.clearCalculation();
        }
        return;
      }
      case 'sign': {
        this.setState({
          result: this.toggleResultSign(this.state.result)
        });
        return;
      }
      case 'percentage': {
        this.setState({
          result: this.getPercentageResult(this.state.result)
        });
        return;
      }
      default: {
        break;
      }
    }
    
    this.state.calculation.push(_value);
    if (!_operator && !_header) {
      this.setResult(_value);
    }

    if (this.state.calculation.length > 0) {
      // TODO update all labels of keys with altLabels
    }
  }

  getPercentageResult(_result) {
    return _result * 0.01;
  }

  toggleResultSign(_result) {
    if (_result > 0) {
      return _result * -1;
    }

    return mathjs.abs(_result);
  }

  calculateTotal() {
    let calculation = this.state.calculation.join('');
    return mathjs.eval(calculation);
  }

  setResult(_value) {
    this.setState({
      result: _value
    });
  }
  
  clearCalculation() {
    this.setState({
      calculation: []
    });
  }

  render() {
    return (
      <div className="Calculator">
        <CalculatorResult total={this.state.result} />
        <CalculatorKeys prepareResult={this.prepareResult} />
      </div>
    );
  }
}

export default Calculator;
