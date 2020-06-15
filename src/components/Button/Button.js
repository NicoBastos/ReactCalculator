import React from 'react';
import classes from './Button.module.css';
const Button = (props) => {
    const isOperator = val => {
        return !isNaN(val) || val === '.' || val === '=';
    }

    const clicked = () => {
        props.onPress(props.children);
    }
    const cssClass = isOperator(props.children) ? classes.button: classes.operator;
    return(
        <div className={cssClass} onClick={clicked}>{props.children}</div>
    );
};

export default Button;