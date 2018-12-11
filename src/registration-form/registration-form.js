import React from 'react';
import TextInput from './../text-input/text-input'

export default class RegistrationForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      user: {
        username:'',
        password: ''
      },
      error: {}
    }

    this.handleClick= this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.state.user[event.target.name] = event.target.value;
  }

  handleClick(e){
    console.log(this.state.user);
  }

  render() {
    return (
      <div>
        <TextInput title='username' name='username' htmlId='username' required={true} placeholder="username" onChange={this.onChange}/>
        <TextInput title='password' name='password' type='password' htmlId='password' required={true} placeholder="password" error={'wrong password'} onChange={this.onChange}/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }

}

RegistrationForm.propTypes ={
  
}

RegistrationForm.defaultProps = {
  placeholder: "input"
};


