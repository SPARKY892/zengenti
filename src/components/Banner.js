import React from 'react';
import './Banner.scss';
import {ReactComponent as BannerImage} from '../images/banner-image.svg';

const Hero = () => {
    return(
        <React.Fragment>
            <div className="banner-container">
                <div className="hero-sub-container">
                    <div className="banner-marker" />
                    <h3 className="hero-text">There is so much going on at Ludlow University, both on and off campus.</h3>
                    <button className="hero-btn">View student stories</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Hero;