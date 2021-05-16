import React from 'react';
import TwitterIcon from '../images/twitter.svg';
import FacebookIcon from '../images/facebook.svg';
import LinkedInIcon from '../images/linkedin.svg';
import GoogleIcon from '../images/google.svg';
import FadedLogo from '../images/faded-logo.svg';
import Logo from '../images/logo.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-sub-container">
                <div className="footer-faded-logo-container">
                    <img src={FadedLogo} className="footer-faded-logo" alt="Faded Logo" />
                    <div className="footer-logo-social-container">
                        <img className="footer-logo" src={Logo} />
                        <div className="footer-social-container">
                            <img src={TwitterIcon} alt="Twitter" />
                            <img src={LinkedInIcon} alt="LinkedIn" />
                            <img src={GoogleIcon} alt="Google" />
                            <img src={FacebookIcon} alt="Facebook" />
                        </div>
                    </div>
                </div>
                <div className="footer-twitter-container">
                
                </div>
            </div>
        </footer>
    );
};

export default Footer;