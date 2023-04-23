import React from 'react';
import Header from '../components/Header';
import hero from '../assets/hero.png'
import Footer from '../components/Footer';

const ProductsPage = () => {
    return (
        <>
        <Header/>
        <main>
            <section className="products-section">
                <div className="products _container">
                    <div className="product">
                        <div className="first-column">
                            <div className="product-title">
                            Тариф <br/> <span>С 8:00 до 12:00</span>
                            </div>
                            <div className="product-text">
                            Это базовый курс для начинающих тестировщиков, который научит вас писать автоматизированные UI-тесты на языке программирования Python с помощью библиотеки Selenium. А еще мы рассмотрим популярные фреймворки и хорошие практики написания автотестов.
                            </div>
                            <div className="product-button">Купить</div>
                        </div>
                        <div className="second-column">
                            <div className="product-img">
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="first-column">
                            <div className="product-title">
                            Тариф <br/> С 8:00 до 12:00 
                            </div>
                            <div className="product-text">
                            Это базовый курс для начинающих тестировщиков, который научит вас писать автоматизированные UI-тесты на языке программирования Python с помощью библиотеки Selenium. А еще мы рассмотрим популярные фреймворки и хорошие практики написания автотестов.
                            </div>
                            <div className="product-button">Купить</div>
                        </div>
                        <div className="second-column">
                            <div className="product-img">
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
};

export default ProductsPage;