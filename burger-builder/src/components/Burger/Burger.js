import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import Aux from '../../hoc/Aux';
import classes from './Burger.css';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="salad" />
        </div>
    );
}

export default burger;