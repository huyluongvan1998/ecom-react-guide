import React from 'react';

import './header.style.scss';


import { ReactComponent as Logo } from '../../asset/images/toys.svg';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className='header'>
         <div className='header-content'>
            <Link to='/' className='brand-icon'>
                <Logo className='icon' />
            </Link>
            <div className='content-options'>
               <Link 
                    className='option'
                    to='/shop'>
                   Shop
               </Link>
               <Link 
                    className='option'
                    to='/contact'>
                   Contact
               </Link>
               <Link 
                    className='option'
                    to='/sign-up'>
                   Sign Up
               </Link>
            </div>
        </div>
    </header>   
);

export default Header;
