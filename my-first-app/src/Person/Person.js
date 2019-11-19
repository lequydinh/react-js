import React, { Component } from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
}

// class Person extends Component {
//     render () {
//     return <p>My name is {this.props.name}</p>
//     }
// }

export default Person;