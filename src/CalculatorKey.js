import React, { Component } from 'react';

var classNames = require('classnames');

class CalculatorKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label
    };
  }
  render() {
    var _span = this.props.span ? 'calculator__key--span-' + this.props.span : null;

    this.classNames = classNames({
      'calculator__key': true,
      'calculator__key--header': this.props.header,
      'calculator__key--operator': this.props.operator,
    });

    if (_span) {
      this.classNames += ' ' + _span;
    }

    this.value = this.props.value ? this.props.value : this.props.label;

    return (
      <button type="button" className={this.classNames} onClick={() => this.props.action(this)}>
        {this.state.label}
      </button>
    );
  }
}

export default CalculatorKey;
