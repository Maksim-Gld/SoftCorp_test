import React, { Component } from 'react';
import "slick-carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SliderProducts.scss"
import Slider from "react-slick";
import Product from '../Product/Product';
import { products } from '../../helpers/productsList';



export default class SliderProducts extends Component {
render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      swipeToSlide: true,
      initialSlide: 0,
      responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
            }
          },
      ]
    };
    return (
      <div className='slider-products'>
        <h2> Categories </h2>
        <Slider {...settings}>
             {products.map( (product) => {
                return <Product 
                key={product.id} 
                title={product.title} 
                imageSlider={product.imageSlider}
                link={product.link} 
                />
            })} 
        </Slider>
      </div>
    );
  }
}