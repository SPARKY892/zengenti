import React, { useState } from 'react';
import {ReactComponent as HeaderLogo} from '../images/logo.svg';
import './Header.scss';

const Header = () => {
    const [menuActive, setMenuActive]=  useState(false);

    return (
        <div className="header-container">
            <HeaderLogo className="header-logo" />
            <div className={menuActive ? 'nav-container active' : 'nav-container'}>
                <div className="nav-item-container">
                    <a className="nav-item">Study</a>
                    <a className="nav-item">Research</a>
                    <a className="nav-item">About Us</a>
                </div>
            </div>
            <div className="nav-menu-icon" onClick={() => {setMenuActive(!menuActive)}}>
                <i className={menuActive ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
            </div>
        </div>
    );
};

export default Header;