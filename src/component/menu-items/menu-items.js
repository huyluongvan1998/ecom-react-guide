import React from 'react';

import './menu-items.style.scss';

const menuItems = ({title, subtitle, imageUrl, size}) => (
    <div className={`${size} menu-items`}>
        <div className='background-image' 
                style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{ title }</h1>
            <span className="subtitle">{ subtitle }</span>
        </div>
    </div>
)

export default menuItems;