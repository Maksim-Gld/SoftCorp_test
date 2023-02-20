import React from 'react';

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
                    {props.title}
                </a>
            </div>
        </div>
    );
};

export default Product;