import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/logo_welbex.svg'
import teleg from '../assets/telegram.svg'
import whatsapp from '../assets/whatsapp.svg'

const Header = () => {
    return (
        <header>
            <div className="header _container">
                <div className="header__content_left">
                    <div className="header__logo logo">
                    <Link to="/">GameStorm</Link>
                    </div>
                    <nav>
                        <ul className="header__nav nav">
                            <li className="nav__item">Тарифы</li>
                            <li className="nav__item"><Link to="/products">Товары</Link></li>
                            <li className="nav__item"><Link to="/auth">Регистрация</Link></li>
                        </ul>
                    </nav>
                </div>
                <div class="header__content_right">
                    <div className="header__number">+7 555 555-55-55</div>
                    <ul className="header__icons">
                        <li className="header__icon">
                            <img src={teleg} alt=""/>
                        </li>
                        <li className="header__icon">
                            <img src={whatsapp} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;