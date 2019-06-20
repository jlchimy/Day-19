import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div>
        <header>This is the home page.</header>
        <div>
          <button onClick={() => this.props.history.goBack()}>Back</button>
        </div>
      </div>
    );
  }
}

export default Home;