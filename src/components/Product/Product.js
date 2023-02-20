import React from 'react';
import "./Product.scss"

const Product = (props) => {
    return (
        <div className='product__item'>
            <div className='product__image'>
                <a href={props.link}>
                    <img src={props.imageSlider} alt=""/>
                </a>
            </div>
            <div className='product__title'>
                <a href={props.link}>
                    <b>{props.title}</b>
                </a>
            </div>
        </div>
    );
};

export default Product;