import React from 'react';
import './Hero.scss';
import {ReactComponent as HeroImage} from '../images/hero-image.svg';

const Hero = () => {
    return(
        <React.Fragment>
            <a className="hero-breadcrumb" href="/">Home</a>
            <div className="hero-container">
                <div className="hero-sub-container">
                    <h1 className="hero-header">STUDENT LIFE</h1>
                    <h3 className="hero-text">There is so much going on at Ludlow University, both on and off campus.</h3>
                    <h4 className="hero-name">Lisa Smith</h4>
                    <p className="hero-title">Student, BSc (Hons) Computer Games Design</p>
                    <button className="hero-btn"><h5>View student stories</h5></button>
                </div>
                <HeroImage className="hero-img" />
            </div>
        </React.Fragment>
    );
};

export default Hero;