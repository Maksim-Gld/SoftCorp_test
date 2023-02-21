import React from 'react';
import SearchBlock from '../../components/SearchBlock/SearchBlock';
import PhonebeBlock from '../../components/PhoneBlock/PhoneBlock';
import NavMenu from '../../components/NavMenu/NavMenu';
import ico_Logo from '../../assets/logo.svg';
import ico_Lists from '../../assets/ico_lists.svg';
import ico_Account from '../../assets/ico_account.svg';
import ico_QuickOrder from '../../assets/ico_quick_order.svg';
import ico_Cart from '../../assets/ico_cart.svg';

const Header = () => {
    return (
        <header className='header-section'>
            <div className='header-section__top-lv'>
                <a href="{urlReauest}">Request a Sample</a>
                <a href="{urlReauest}">Help</a>
                <a href="{urlReauest}">Contact</a>
            </div>
            <div className='header-section__middle-lv'>
                <div className='header-section__logo'>
                    <img src={ico_Logo} alt="Logo"/>
                </div>
                <SearchBlock />
                <div className='header-section__user-nav'>
                    <ul className='user-nav__menu'>
                        <li>
                            <a href='{urlLists}'>
                                <span className='user-nav__ico'>
                                    <img src={ico_Lists} alt=""/>
                                </span>
                                <span className='user-nav__title'>Lists</span>
                            </a>
                        </li>
                        <li>
                            <a href='{urlLists}'>
                                <span className='user-nav__ico'>
                                    <img src={ico_Account} alt=""/>
                                </span>
                                <span className='user-nav__title'>Account</span>
                            </a>
                        </li>
                        <li>
                            <a href='{urlLists}'>
                                <span className='user-nav__ico'>
                                    <img src={ico_QuickOrder} alt=""/>
                                </span>
                                <span className='user-nav__title'>Quick Order</span>
                            </a>
                        </li>
                        <li className='user-nav__cart-item'>
                            <a href='{urlLists}'>
                                <span className='user-nav__ico' data-cart-value="32">
                                    <img src={ico_Cart} alt=""/>
                                </span>
                                <span className='user-nav__title'>Cart</span>
                            </a>
                        </li>
                    </ul>                    
                </div>
                <div className='clr'></div>
            </div>
            <div className='header-section__bottom-lv'>
                <NavMenu />
                <div className='header-section__phone'>
                    <PhonebeBlock />
                </div>
            </div>
        </header>
    );
};

export default Header;