import React from 'react';
import './Upcoming.scss';
import UpcomingImage1 from '../images/coming-soon-1.svg';
import UpcomingImage2 from '../images/coming-soon-2.svg';
import UpcomingImage3 from '../images/coming-soon-3.svg';

const Upcoming = () => {
    return(
        <React.Fragment>
            <div className="upcoming-container">
                <div className="upcoming-header-container">
                    <h3 className="upcoming-header">Upcoming events</h3>
                    <button className="upcoming-button">View all events</button>
                </div>
                <div className="upcoming-sub-container">
                    <div className="upcoming-event-container">
                        <img src={UpcomingImage1} className="upcoming-image" alt="Upcoming 1" />
                        <div className="upcoming-date-container">
                            <p className="upcoming-date-day">01</p>
                            <p className="upcoming-date-month">AUG</p>
                        </div>
                        <h3 className="upcoming-text">Ludlow campus rock festival 2019</h3>
                    </div>
                    <div className="upcoming-event-container">
                        <img src={UpcomingImage2} className="upcoming-image" alt="Upcoming 2" />
                        <div className="upcoming-date-container">
                            <p className="upcoming-date-day">14</p>
                            <p className="upcoming-date-month">AUG</p>
                        </div>
                        <h3 className="upcoming-text">2019 game design exhibition</h3>
                    </div>
                    <div className="upcoming-event-container">
                        <img src={UpcomingImage3} className="upcoming-image" alt="Upcoming 3" />
                        <div className="upcoming-date-container">
                            <p className="upcoming-date-day">21</p>
                            <p className="upcoming-date-month">AUG</p>
                        </div>
                        <h3 className="upcoming-text">Study collaboration session</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Upcoming;