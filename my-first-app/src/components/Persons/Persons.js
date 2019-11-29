import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((e, index) => {
    return <Person
        click={() => props.clicked(index)}
        name={e.name}
        age={e.age}
        key={e.id}
        changed={(event) => props.changed(event, e.id)} />
});

export default persons;