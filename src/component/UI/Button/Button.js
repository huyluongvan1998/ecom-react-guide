import React from 'react';
import './Button.style.scss';

const Button = (props) => 
    (
    <button onClick={props.onClick} className = {`${props.kind} Button`} >
        {props.children}
    </button>
    
    );

export default Button;