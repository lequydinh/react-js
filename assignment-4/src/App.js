import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    length: null,
    text: ''
  }

  calLength = (event) => {
    const length = event.target.value.length;
    const text = event.target.value;
    this.setState({ length: length, text: text });
  }

  removeChar = (index) => {
    const removedText = this.state.text.slice(0,index) + this.state.text.slice(index+1);
    this.setState({ text: removedText});

    // const text =this.state.text.split('');
    // text.splice(index,1);
    // const updatedText = text.join('');
    // this.setState({text: updatedText});
  }

  render() {
    let chars = null;
    let array = this.state.text.split('');
    chars = (
      array.map((e, index) => {
        return (
          <div>
            <Char
            char={e}
            clicked={() => this.removeChar(index)}
            key = {index}/>
          </div>
        )
      })
    )

    // const charList = this.state.text.split('').map(ch => {
    //   return <Char char={ch} />
    // })

    return (
      <div className="App" >
        <input type="text"
        onChange={this.calLength}
        value={this.state.text} />
        <p>Length: {this.state.length}</p>
        <Validation length={this.state.length} />
        {chars}
      </div>
    );
  }
}

export default App;
