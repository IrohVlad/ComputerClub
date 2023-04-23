import React from 'react';

const MainRates = () => {
    return (
        <section className="main__rates-section">
            <div className="purple-light _light__fore1"></div>
            <div className="main__rates _container">
                <div className="first__column">
                    <div className="main__rates__title">
                        Тариф <span className="_gold-text">Утро</span>
                    </div>
                    <div className="main__rates__stats">
                        С 8:00 до 12:00 
                    </div>
                </div>
                <div className="second__column">
                    <div className="main__rates__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse impedit nihil officiis laborum. Libero vitae eaque numquam vero aliquam fugiat hic perferendis obcaecati cupiditate. A similique beatae repudiandae laudantium veniam?
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainRates;