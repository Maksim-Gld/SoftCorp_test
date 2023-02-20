import React from 'react';
import Product from '../Product/Product';
import { products } from '../../helpers/productsList';

const SliderProducts = () => {
    return (
        <div>
            {products.map( (product) => {
               return <Product 
                key={product.id} 
                title={product.title} 
                imageSlider={product.imageSlider}
                link={product.link} 
                />
            })}            
        </div>
    );
};

export default SliderProducts;