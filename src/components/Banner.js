import React from 'react';
import './Banner.scss';
import BannerImage from '../images/banner-image.svg';

const Banner = () => {
    return(
        <React.Fragment>
            <div className="banner-container">
                <img src={BannerImage} alt="Banner" />
                <div className="banner-sub-container">
                    <div className="banner-marker" />
                    <h3 className="banner-text">Come along to one of our Open Days and find out everything you need to know about the campus, courses and facilities</h3>
                    <button className="banner-btn">View student stories</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Banner;