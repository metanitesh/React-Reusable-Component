import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Label extends React.Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    required: PropTypes.bool
  }

  render() {
    return (
      <label htmlFor={this.props.htmlFor} style={{display:"block"}}>
        {this.props.value}{this.props.required && <span style={{color:"red"}}>*</span>}
      </label>
    )
  }
}
