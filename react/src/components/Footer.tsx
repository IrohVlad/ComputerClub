import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div class="footer _container">
            <div class="footer__first-column">
                <div class="footer__column">
                    <div class="footer__column__title">О компании</div>
                    <div class="footer__subcolumns">
                        <div class="footer__subcolumn">
                            <ul class="footer__links">
                                <li class="footer__link">Партнёрская программа</li>
                                <li class="footer__link">Вакансии</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer__column">
                    <div class="footer__column__title">Меню</div>
                    <div class="footer__subcolumns">
                        <div class="footer__subcolumn">
                            <ul class="footer__links">
                                <li class="footer__link">Расчёт стоимости</li>
                                <li class="footer__link">Услуги</li>
                                <li class="footer__link">Виджеты</li>
                                <li class="footer__link">Интеграции</li>
                                <li class="footer__link">Наши клиенты</li>
                            </ul>
                        </div>
                        <div class="footer__subcolumn">
                            <ul class="footer__links">
                                <li class="footer__link">Кейсы</li>
                                <li class="footer__link">Благодарственные письма</li>
                                <li class="footer__link">Сертификаты</li>
                                <li class="footer__link">Блог на Youtube</li>
                                <li class="footer__link">Вопрос / Ответ</li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="footer__second-column">
                <div class="footer__column">
                    <div class="footer__column__title">Контакты</div>
                    <div class="footer__subcolumns">
                        <div class="footer__subcolumn">
                            <ul class="footer__links">
                                <li class="footer__link number">+7 555 555-55-55</li>
                                <li class="footer__link">
                                    <ul class="footer__icons">
                                        <li class="footer__icon">
                                            <img src="assets/telegram.svg" alt=""/>
                                        </li>
                                        <li class="footer__icon">
                                            <img src="assets/viber.svg" alt=""/>
                                        </li>
                                        <li class="footer__icon">
                                            <img src="assets/whatsapp.svg" alt=""/>
                                        </li>
                                    </ul>
                                </li>
                                <li class="footer__link adress">Москва, Путевой проезд 3с1, к 902</li>
                                <li class="rules">©WELBEX 2022. Все права защищены.</li>
                                <li class="polite">Политика конфиденциальности</li>
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