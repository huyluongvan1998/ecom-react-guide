import React from 'react';

import PreviewItem from './preview-item/preview-item';
import './collection-preview.style.scss';

const collectionPreview = ({ items, title }) => (
    <div className='collection-preview'>
        <h1>{title}</h1>
        <div className='collection-container'>
        {
            items.map(({id, ...otherProps}) => (
                <PreviewItem key={id} {...otherProps} />
            ))
        }
    </div>
    </div>
    
    
);

export default collectionPreview;