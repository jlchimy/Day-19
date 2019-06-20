import React, { Component } from 'react';
import axios from "axios";
import './login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome!
        </p>
          <div>
            Enter your email:
          <input type="text" onChange={(event, newValue) => {
              // console.log(event.target.value, newValue)
              this.setState({ email: event.target.value });
            }} placeholder="Email"></input>
          </div>
          <div>
            Enter your password:
          <input type="password" onChange={(event, newValue) => {
              // console.log(event.target.value, newValue)
              this.setState({ password: event.target.value });
            }}
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
    var apiBaseUrl = "http://localhost:5000/";
    var self = this;
    var inputs = {
      "email": this.state.email,
      "password": this.state.password
    }
    //console.log(inputs);

    axios.post(apiBaseUrl + 'api/users/authentication', inputs)
      .then((response) => {
        // console.log(response);

        if (response.status === 200) {
          console.log("Login successful!");
          this.props.history.push("/home");
        }
      })


      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
          const response = error.response;
          if (response.status >= 400 && response.status <= 404) {
            console.log("Username password do not match.")
            alert("Invalid login!")
          }
        }

      });

  }
}
export default Login;
