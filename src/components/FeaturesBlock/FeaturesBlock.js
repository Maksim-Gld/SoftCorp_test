import React from 'react';
import './FeaturesBlock.scss'
import icoCatalog from '../../assets/ico_catalog.svg'
import icoSupport from '../../assets/ico_support.svg'
import icoIdeas from '../../assets/ico_ideas.svg'

const FeaturesBlock = () => {
    return (
        <div className='features-section'>
            <div className='features__item'>
                <div className='features__ico'>
                    <img src={icoCatalog} alt="Catalog"/>
                </div>
                <div className='features__name'>
                    <b>Products Catalog</b>
                </div>
            </div>
            <div className='features__item'>
                <div className='features__ico'>
                    <img src={icoSupport} alt="Catalog"/>
                </div>
                <div className='features__name'>
                    <b>24/7 Customer Support</b>
                </div>
            </div>
            <div className='features__item'>
                <div className='features__ico'>
                    <img src={icoIdeas} alt="Catalog"/>
                </div>
                <div className='features__name'>
                    <b>Product Ideas</b>
                </div>
            </div>
        </div>
    );
};

export default FeaturesBlock;