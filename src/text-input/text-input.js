import React from 'react';
import PropTypes from 'prop-types';
import Label from './../label/lable'

export default class TextInput extends React.Component {


  render() {

    const {htmlId, title, type='text', required, placeholder, name, children, error, onChange} = this.props;

    return (
      <div>
      <Label htmlFor={htmlId} value={title} required={required}></Label>
      <input id={htmlId} name={name} type={type} placeholder={placeholder} onChange={onChange}/>
      {children}
      {error && <div>{error}</div>}
      </div>
    )
  }

}

TextInput.propTypes ={
  htmlId: PropTypes.string.isRequired
}

TextInput.defaultProps = {
  placeholder: "input"
};
