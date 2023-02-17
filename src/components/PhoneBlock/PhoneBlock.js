import React from 'react';
import './PhoneBlock.scss'
import icoPhone from '../../assets/ico_phone.svg'


const PhoneBlock = () => {
    return (
        <div className='phone-section'>
            <div className='phone-section__ico'>
                <img src={icoPhone} alt=''/>
            </div>
            <div className='phone-section__link'>
                <a href="tel:+844434672">+(844) 434-672</a>
            </div>
        </div>
    );
};

export default PhoneBlock;