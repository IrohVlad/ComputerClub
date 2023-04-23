import React from 'react';
import hero from '../assets/hero.png'
import del from '../assets/delete.svg'

const Basket = () => {
    return (
        <section className='basket-section'>
            <div className="basket _container">
                <div className="basket-item">
                    <div className="basket-img">
                        <img src={hero} alt="" />
                    </div>
                    <div className="basket-title">Тариф Утро</div>
                    <div className="basket-buttons">
                        <div className="basket-delete">
                            <img src={del} alt="" />
                        </div>
                        <div className="basket-buy _gold-button">Купить</div>
                    </div>
                </div>
                <div className="basket-item">
                    <div className="basket-img">
                        <img src={hero} alt="" />
                    </div>
                    <div className="basket-title">Тариф Утро</div>
                    <div className="basket-buttons">
                        <div className="basket-delete">
                            <img src={del} alt="" />
                        </div>
                        <div className="basket-buy _gold-button">Купить</div>
                    </div>
                </div>
                <div className="basket-item">
                    <div className="basket-img">
                        <img src={hero} alt="" />
                    </div>
                    <div className="basket-title">Тариф Утро</div>
                    <div className="basket-buttons">
                        <div className="basket-delete">
                            <img src={del} alt="" />
                        </div>
                        <div className="basket-buy _gold-button">Купить</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;