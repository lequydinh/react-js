import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(e => {
                return <BuildControl key={e.label}
                    label={e.label}
                    type={e.type}
                    added={() => props.ingredientsAdded(e.type)}
                    removed={() => props.ingredientsRemoved(e.type)}
                    disabled={props.disabled[e.type]} />
            })}
            <button
                className={classes.OrderButton}
                disabled={!props.purchaseable}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;