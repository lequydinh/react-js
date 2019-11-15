import React from 'react';

const person = (data) => {
return <p>I'm {data.name}! and I'm {Math.floor(Math.random()*30)} years old</p>
}

export default person;