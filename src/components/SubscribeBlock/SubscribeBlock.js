import React from 'react';
import './SubscribeBlock.scss'
import icoPayment from '../../assets/ico_payments.png'

const subscribeBlock = () => {
    return (
        <div className='subscribe-section'>
            <p className='subscribe-section__title'><b>Subscribe to our mailing list to receive exclusive offers and the latest product updates</b></p>
            <form action='' method=''>
                <div className='subscribe__form'>
                    <input type={'email'} placeholder="Your email"></input>
                    <input className='button-blue button-blue__small' type="submit" value="Subscribe" />
                </div>
            </form>
            <div className='payment'>
                <img src={icoPayment} alt=''/>
            </div>
        </div>
    );
};

export default subscribeBlock;