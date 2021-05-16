import React, { useState } from 'react';
import HeaderLogo from '../images/logo.svg';
import SearchIcon from '../images/search.svg';
import './Header.scss';

const Header = () => {
    const [menuActive, setMenuActive]=  useState(false);

    return (
        <div className="header-container">
            <img src={HeaderLogo} className="header-logo" />
            <div className={menuActive ? 'nav-container active' : 'nav-container'}>
                <div className="nav-item-container">
                    <a className="nav-item"><h5>Study</h5></a>
                    <a className="nav-item"><h5>Research</h5></a>
                    <a className="nav-item"><h5>About Us</h5></a>
                    <img src={SearchIcon} className="nav-item nav-search" />
                </div>
            </div>
            <div className="nav-menu-icon" onClick={() => {setMenuActive(!menuActive)}}>
                <i className={menuActive ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
            </div>
        </div>
    );
};

export default Header;