import React from 'react';

import './formInput.style.scss';

const formInput = ({change, label, ...otherProps}) => (
    <div className='input-container'>
        <input className='input-box' 
            {... otherProps} 
            onChange={ change } 
            />
        {
            label
            ?   <label className={`${otherProps.value.length ? 'shrink' : ' '} label`}>
                    {label}
                </label>
            : null 
        }
    </div>
);

export  default formInput;