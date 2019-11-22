import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput';

class App extends Component {
  state = {
    username: [
      { name: 'Roger Le' }
    ]
  };

  nameHandler = event => {
    this.setState({
      username: [
        { name: event.target.value }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.username[0].name} changed={this.nameHandler}></UserInput>
        <UserOutput name={this.state.username[0].name}></UserOutput>
      </div>
    );
  }
}

export default App;
