import React from 'react';
import {Link} from 'react-router-dom'
import teleg from '../../assets/telegram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import basket from '../../assets/basket.svg'
import { useNavigate } from 'react-router-dom';
import { LogoutRequest, authState } from '../../features/auth';
import { useSelector, useDispatch } from 'react-redux';

interface IAuth {
    auth: authState;
    [key: string]: any;
}

const Header = () => {
    const auth = useSelector((state: IAuth) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <header>
            <div className="header _container">
                <div className="header__content_left"> 
                    <div className="header__logo logo">
                    <Link to="/">GameStorm</Link>
                    </div>
                    <nav>
                        <ul className="header__nav nav">
                            <li className="nav__item"><Link to="/rates">Тарифы</Link></li>
                            <li className="nav__item"><Link to="/products">Товары</Link></li>
                            {!auth.auth && <li className="nav__item"><Link to="/auth">Регистрация</Link></li>}
                            {auth.auth && <li onClick={()=>{
                                LogoutRequest(dispatch);
                            }} className="nav__item">Выйти</li>}
                            <li className="nav__item"><img onClick={()=>{
                                if(auth.auth){
                                    navigate('/basket')
                                } else {
                                    navigate('/auth')
                                }
                            }} src={basket} alt="" /></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__content_right">
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