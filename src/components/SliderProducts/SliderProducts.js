import React, { Component } from 'react';
import "slick-carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SliderProducts.scss"
import LiveChatButton from '../LiveChatButton/LiveChatButton';
import Slider from "react-slick";
import Product from '../Product/Product';
import { products } from '../../helpers/productsList';



export default class SliderProducts extends Component {
render() {
    const settings = {
      
      centerPadding: "4px",
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 6,
      initialSlide: 3,
      swipeToSlide: true,
      pauseOnHover: true,
      responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640,
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
        <LiveChatButton />
        <div className='slider-products__title-block'>Categories</div>
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