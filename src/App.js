import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Label from './Label/lable';
// import TextInput from './Text-input/text-input'
import RegistrationForm from './registration-form/registration-form'

class App extends Component {
  render() {
    return (
      <div className="App">
      <RegistrationForm ></RegistrationForm >
        {/* <Label value="nitesh" htmlFor='element' required={true}></Label> */}
      </div>
    );
  }
}



export default App;
