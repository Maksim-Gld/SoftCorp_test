import React from 'react';
import ico_Logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <div className='header_logo'>
                <img src={ico_Logo} alt="Logo"/>
            </div>
        </header>
    );
};

export default Header;