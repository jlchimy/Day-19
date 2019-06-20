import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';


class Login extends Component{ 
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 

 }


render() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome!
        </p>
        <div>
          Enter your email:
          <input type="text" onChange = {(event,newValue) => {
            console.log(event.target.value, newValue)
            this.setState({email:event.target.value});
          }} placeholder="Email"></input>
        </div>
        <div>
          Enter your password:
          <input type="password" onChange = {(event, newValue) => {
            console.log(event.target.value, newValue)
            this.setState({password: event.target.value});}}
            placeholder="Password"></input>
        </div>
        <div>
          <button onClick={(event) => this.login()}>
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
login() {
  var apiBaseUrl = "http://localhost:4000/";
  var self = this;
  var inputs = {
    "email": this.state.email,
    "password": this.state.password
  }
  console.log(inputs);

  axios.post(apiBaseUrl+'users/authentication', inputs)
  .then(function (response) {
    console.log(response);


    if(response.status === 200) {
      console.log("Login successful!");
    }
  })

  
  .catch(function (error) {
    const response = error.response;
    if (response.status === 401) {
      console.log("Username password do not match.")
      alert("Invalid login!")
    }
  });
  
}
}
export default Login;
