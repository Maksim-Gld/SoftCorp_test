import React from 'react';
import SliderMain from '../../components/SliderMain/SliderMain'
import BannerShop from '../../components/BannerShop/BannerShop';
import FeaturesBlock from '../../components/FeaturesBlock/FeaturesBlock';
import SliderProducts from '../../components/SliderProducts/SliderProducts';
import imageBackgr from '../../assets/banner.png'

const Main = () => {
    return (
        <div>
            <SliderMain />
            <SliderProducts />
            <BannerShop 
                imageBackgr={imageBackgr}
                title='Large Inventory Of Power Tools & Accessories'
                descrip_text="Find the Aluminum and Stainless Steel items for your project in stock and ready to ship today! Avoid project delays and long lead times in a challenging supply chain for specialty metals and non-ferrous items. We are well stocked and here to serve you with guided support."
                btn_link="#!" 
                btn_text="Shop Now"
            />
            <FeaturesBlock />
        </div>
    );
};

export default Main;