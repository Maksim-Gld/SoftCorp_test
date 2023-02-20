import React from 'react';
import './BannerShop.scss'


const BannerShop = (props) => {
    return (
        <div className='banner-shop'>
            <img className='banner-shop__image' src={props.imageBackgr} alt=""/>
            <div className='banner-shop__content'>
                <div className='banner-shop__content-restrict'>
                    <div className='banner-shop__row banner-shop__title'>{props.title}</div>
                    {props.descrip_text &&
                        <div className='banner-shop__row'>
                            <p className='banner-shop__info'>{props.descrip_text}</p>
                        </div>
                    }
                    {props.btn_text && props.btn_link &&
                        <div className='banner-shop__row banner-shop__buttons'>
                            <a className='button-lnk button-blue' href={props.btn_link}>{props.btn_text}</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BannerShop;