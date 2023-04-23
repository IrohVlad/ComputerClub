import React from 'react';
import hero from '../assets/hero.png'

const MainCard = () => {
    return (
        <section className="card-section">
            <div className="purple-light _light__fore1"></div>
            <div className="red-ball _light__fore2"></div>
            <div className="purple-ball _light1"></div>
            <div className="card _container">
                <div className="first-column">
                    <div className="card-title">Let`s begin </div>
                    <div className="card-line">
                        <div className="line-title">Phone</div>
                        <div className="line-subtitle">+7 555 555-55-55</div>
                    </div>
                    <div className="card-line">
                        <div className="line-title">Email</div>
                        <div className="line-subtitle">juney@journey.com</div>
                    </div>
                    <div className="card-line">
                        <div className="line-title">Social</div>
                        <div className="line-subtitle"></div>
                    </div>
                </div>
                <div className="second-column">
                    <div className="card-img">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainCard;