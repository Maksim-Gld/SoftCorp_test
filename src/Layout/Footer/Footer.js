import React from 'react';
import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock';
import PhonebeBlock from '../../components/PhoneBlock/PhoneBlock';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className='footer__menu-sections'>
                <div className='footer__menu-blocks'>
                    <div className='footer__menu-block'>
                        <div className='footer__menu-title'><b>Helpful Links</b></div>
                        <ul className='footer__menu-list'>
                            <li>
                                <a href='{someValidPath}'>Buyer’s Guides</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Calculators</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>All Brands</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Catalg Updates</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__menu-block'>
                        <div className='footer__menu-title'><b>Customer Services</b></div>
                        <ul className='footer__menu-list'>
                            <li>
                                <a href='{someValidPath}'>Express Delivery</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Privacy Statement</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Terms of Use</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Pricing Policy</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Returns and Refunds</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Help and FAQ</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Return Points</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Returns and Orders</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__menu-block'>
                        <div className='footer__menu-title'><b>Support</b></div>
                        <ul className='footer__menu-list'>
                            <li>
                                <a href='{someValidPath}'>Contact Us</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>FAQ</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Feedback</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>Live Chat</a>
                            </li>
                            <li>
                                <a href='{someValidPath}'>My Account</a>
                            </li>
                        </ul>
                        <PhonebeBlock />
                    </div>
                </div>
                <SubscribeBlock />
            </div>
            <div className='footer__copyright'>© «Brand» 2022, All Rights Reserved</div>
        </footer>
    );
};

export default Footer;