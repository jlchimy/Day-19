import React from 'react';
import axios from "axios";

class Home extends React.Component {

  properties;

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     Name: '',
  //     Location: ''
  //   }

  // }

  render() {
    var apiBaseUrl = "http://localhost:5000/api";
    axios.get(apiBaseUrl + "/properties")
      .then((response) => {
        //console.log(response.data[0]);
        this.setState({ Name: response.data[0].name, Location: response.data[0].location})
      })
      .catch((err) => {
        console.log(err);
      })
    return (
      <div>
        <header>This is the home page.</header>
        <div>
          
        </div>
        <div>
          <button onClick={() => this.props.history.goBack()}>Back</button>
        </div>
      </div>
    );
  }
}

export default Home;