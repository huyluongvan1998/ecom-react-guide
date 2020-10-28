import React from 'react';

import ITEMS_DATA from '../../asset/data/products.data';
import CollectionPreview from '../collection-preview/collection-preview';
import './ShopDirectory.style.scss';

class shopDirectory extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: ITEMS_DATA
        };
    }
    render() {
        const {collection} = this.state;
        return (
            <div className='shop-directory'>
                {
                   collection.map(({ id, ...otherProps }) => 
                   (
                    <CollectionPreview key={id} {...otherProps} />
                   ))
                }
            </div>
        );
    }
}

export default shopDirectory;