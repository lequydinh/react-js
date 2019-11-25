import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Roger', age: '23' },
      { id: 'xyz', name: 'Test', age: '24' }
    ],
    otherState: 'Some state',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Roger1'
    this.setState({
      persons: [
        { name: newName, age: '27' },
        { name: 'Test 1', age: '28' }
      ],
      otherState: this.state.otherState
    })
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    // const persons = this.state.persons;
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })

  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px so lid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((e, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={e.name}
              age={e.age}
              key={e.id}
              changed={(event) => this.nameChangedHandler(event, e.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
