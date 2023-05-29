import React from 'react';
import hero from '../../assets/hero.png'

const Hero = () => {
    return (
        <section className="hero-section">
                <div className="hero _container">
                    <div className="hero__first-column">
                        <div className="hero__first-column__title">Играйте и <br/> работайте</div>
                        <div className="hero__first-column__colored">c GameStorm</div>
                        <div className="hero__first-column__text">Играйте легко <br/> и с удовольствием</div>
                    </div>
                    <div className="hero__second-column">
                        <div className="hero__img">
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Hero;