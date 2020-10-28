import React from 'react';

import './directory.style.scss';

import MenuItems from '../menu-items/menu-items';

import PRODUCT_DATA from '../../asset/data/products.data';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            collection : PRODUCT_DATA
        }
    }

    render() {
        const { collection } = this.state ;
        return (
            <div className='directory-menu'>
                {   
                    collection.map(({title, subtitle, size, id, imageUrl}) => (
                        <MenuItems  title={title}
                                    subtitle={subtitle}
                                    key={id}
                                    imageUrl={imageUrl}
                                    size={size}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Directory;