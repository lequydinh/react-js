import React from 'react';
import './Char.css'

const char = (props) => {
    return (
        <div className="char">
            <p onClick={props.clicked}>{props.char}</p>
        </div>
    );
}

export default char;