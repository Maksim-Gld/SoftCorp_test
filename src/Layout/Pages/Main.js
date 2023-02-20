import React from 'react';
import BannerShop from '../../components/BannerShop/BannerShop';
import FeaturesBlock from '../../components/FeaturesBlock/FeaturesBlock';
import SliderProducts from '../../components/SliderProducts/SliderProducts';

const Main = () => {
    return (
        <div>
            <SliderProducts />
            <BannerShop />
            <FeaturesBlock />
        </div>
    );
};

export default Main;