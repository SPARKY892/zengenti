import React from 'react';
import CardImage1 from '../images/card-image-1.svg';
import CardImage2 from '../images/card-image-2.svg';
import CardImage3 from '../images/card-image-3.svg';
import CardImage4 from '../images/card-image-4.svg';
import CardImage5 from '../images/card-image-5.svg';
import ArrowIcon from '../images/arrow.svg';
import './Cards.scss';

const Cards = () => {
    return(
        <React.Fragment>
            <div className="card-container">
                <div className="card1-container">
                    <img src={CardImage1} className="card1-image"/>
                    <div className="card-overlay">
                        <div className="card-sub-container">
                            <h5 className="card-header">Activities and clubs</h5>
                            <img src={ArrowIcon} alt="arrow" />
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="card2-container">
                    <img src={CardImage2} className="card2-image"/>
                    <div className="card-overlay">
                        <div className="card-sub-container">
                            <h5 className="card-header">Accomodation</h5>
                            <img src={ArrowIcon} alt="arrow" />
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="card3-container">
                    <img src={CardImage3} className="card3-image"/>
                    <div className="card-detail">
                        <div className="card-sub-container">
                            <h5 className="card-header">Chat to a student</h5>
                            <img src={ArrowIcon} alt="arrow" />
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="card4-container">
                    <img src={CardImage4} className="card4-image"/>
                    <div className="card-detail">
                        <div className="card-sub-container">
                            <h5 className="card-header">Support</h5>
                            <img src={ArrowIcon} alt="arrow" />
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="card5-container">
                    <img src={CardImage5} className="card5-image"/>
                    <div className="card-detail">
                        <div className="card-sub-container">
                            <h5 className="card-header">Life in Ludlow</h5>
                            <img src={ArrowIcon} alt="arrow" />
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Cards;