import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Roger', age: '23' },
      { name: 'Test', age: '24' }
    ],
  }

  switchNameHandler = (newName) => {
    // console.log('Was click');
    // DON'T DO THIS: this.state.persons[0].name = 'Roger1'
    this.setState({
      persons: [
        { name: newName, age: '27' },
        { name: 'Test 1', age: '28' }
      ],
      // otherState: personState.otherState
    })
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: '28' },
        { name: event.target.value, age: '27' }
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.switchNameHandler('Roger Le')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Roger Le')}
          change={this.nameChangedHandler} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangedHandler} >Some Information</Person>
      </div>
    );
  }
}

export default App;
