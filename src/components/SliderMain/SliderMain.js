import React, { Component } from 'react';
import "slick-carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SliderMain.scss"
//import "./SliderProducts.scss"
import Slider from "react-slick";
import BannerShop from '../BannerShop/BannerShop';
import { slides } from '../../helpers/bannerLists';



export default class SliderMain extends Component {
render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      adaptiveHeight: true,
    };
    return (
      <div className='slider-main'>
        <Slider {...settings}>
             {slides.map( (product) => {
                return <BannerShop 
                key = {product.id}
                imageBackgr={product.imageSlider}
                title={product.title}
                descrip_text={product.descrip_text}
                btn_link={product.btnLink} 
                btn_text={product.btnTitle} 
            />
            })} 
        </Slider>
      </div>
    );
  }
}