import React from 'react';
import CardImage1 from '../images/card-image-1.svg';
import CardImage2 from '../images/card-image-2.svg';
import CardImage3 from '../images/card-image-3.svg';
import CardImage4 from '../images/card-image-4.svg';
import CardImage5 from '../images/card-image-5.svg';
import ArrowIcon from '../images/arrow.svg';
import SmallCards from './SmallCards';
import './Cards.scss';

const Cards = () => {
    return(
        <React.Fragment>
            <div className="card-container">
                <div className="card-top-row-container">
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
                </div>
                <div className="card-bottom-row-container">
                    <SmallCards imageSource={CardImage3} />
                    <SmallCards imageSource={CardImage4} />
                    <SmallCards imageSource={CardImage5} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Cards;