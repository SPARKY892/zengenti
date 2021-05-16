import React from 'react';
import './SmallCards.scss';
import ArrowIcon from '../images/arrow.svg';

const SmallCards = ({ imageSource }) => {
    return(
        <div className="small-card-container">
            <img src={imageSource} className="small-card-image"/>
                <div className="small-card-detail">
                    <div className="small-card-sub-container">
                        <h5 className="small-card-header">Chat to a student</h5>
                        <img src={ArrowIcon} alt="arrow" />
                    </div>
                    <p className="small-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
    );
};

export default SmallCards;