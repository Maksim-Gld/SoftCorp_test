import React from 'react';
import './BannerShop.scss'
import imageBackgr from '../../assets/banner.png'

const BannerShop = () => {
    return (
        <div className='banner-shop' /*style={{ backgroundImage: `url(${imageBackgr})` }}*/>
            <img className='banner-shop__image' src={imageBackgr} alt=""/>
            <div className='banner-shop__content'>
                <div className='banner-shop__row banner-shop__title'>Large Inventory Of Power Tools & Accessories</div>
                <div className='banner-shop__row'>
                    <p className='banner-shop__info'>Find the Aluminum and Stainless Steel items for your project in stock and ready to ship today! Avoid project delays and long lead times in a challenging supply chain for specialty metals and non-ferrous items. We are well stocked and here to serve you with guided support.</p>
                </div>
                <div className='banner-shop__row banner-shop__buttons'>
                    <a className='button-lnk button-blue' href='{urlLink}'>Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default BannerShop;