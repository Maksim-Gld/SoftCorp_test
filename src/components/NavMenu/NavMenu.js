import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './NavManu.scss'

const NavMenu = () => {

    return(
        <div className='nav-section__contaner'>
            <Menu right>
                <ul className='mobile-menu'>
                    <li>
                        <a href="{urlMenu}">Products</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Resources</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Services</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Locations</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Careers</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Support</a>
                    </li>
                </ul>
            </Menu>
            <nav className='nav-section'>
                <ul className='main-menu'>
                    <li>
                        <a href="{urlMenu}">Products</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Resources</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Services</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Locations</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Careers</a>
                    </li>
                    <li>
                        <a href="{urlMenu}">Support</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu