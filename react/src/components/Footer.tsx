import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className="footer _container">
            <div className="footer__first-column">
                <div className="footer__column">
                    <div className="footer__column__title">О компании</div>
                    <div className="footer__subcolumns">
                        <div className="footer__subcolumn">
                            <ul className="footer__links">
                                <li className="footer__link">Партнёрская программа</li>
                                <li className="footer__link">Вакансии</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__column">
                    <div className="footer__column__title">Меню</div>
                    <div className="footer__subcolumns">
                        <div className="footer__subcolumn">
                            <ul className="footer__links">
                                <li className="footer__link">Услуги</li>
                                <li className="footer__link">Услуги</li>
                                <li className="footer__link">Виджеты</li>
                                <li className="footer__link">Услуги</li>
                                <li className="footer__link">Наши клиенты</li>
                            </ul>
                        </div>
                        <div className="footer__subcolumn">
                            <ul className="footer__links">
                                <li className="footer__link">Услуги</li>
                                <li className="footer__link">Услуги</li>
                                <li className="footer__link">Услуги</li>
                                <li className="footer__link">Услуги</li>
                                <li className="footer__link">Вопрос / Ответ</li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="footer__second-column">
                <div className="footer__column">
                    <div className="footer__column__title">Контакты</div>
                    <div className="footer__subcolumns">
                        <div className="footer__subcolumn">
                            <ul className="footer__links">
                                <li className="footer__link number">+7 555 555-55-55</li>
                                <li className="footer__link">
                                    <ul className="footer__icons">
                                        <li className="footer__icon">
                                            <img src="assets/telegram.svg" alt=""/>
                                        </li>
                                        <li className="footer__icon">
                                            <img src="assets/viber.svg" alt=""/>
                                        </li>
                                        <li className="footer__icon">
                                            <img src="assets/whatsapp.svg" alt=""/>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer__link adress">Москва, Московский проезд</li>
                                <li className="rules">GameStorm 2022. Все права защищены.</li>
                                <li className="polite">Политика конфиденциальности</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </footer>
    );
};

export default Footer;