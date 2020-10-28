import React from 'react';
import './preview-item.style.scss';

const previewItem = ({imageUrl,title, price}) => (
    <div className='preview'>
        <div className='image-container'>
            <div 
                className='image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
            }}>
                
            </div>
        </div>
        <div className="footer">
            <span>{title}</span>
            <span>${price}</span>
        </div>
    </div>
);

export default previewItem;