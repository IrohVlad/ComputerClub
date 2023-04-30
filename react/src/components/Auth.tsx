import React, { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterRequest } from '../redux/authSlice';

const Auth = () => {
    const [authData, setAuthData] = React.useState({login: '', password: ''})
    const dispatch = useDispatch();
    React.useEffect(()=>{
        console.log(authData)
    }, [authData])
    return (
        <section className="auth-section">
            <div className="auth">
                <div className="auth-form">
                    <div className="auth-title">
                        Login
                    </div>
                    <input onChange={(e)=>{
                        setAuthData({...authData, login: e.target.value});
                    }} placeholder="Enter email I'd" type="text" className="auth-input">

                    </input>
                    <input onChange={(e)=>{
                        setAuthData({...authData, password: e.target.value});
                    }} placeholder="Enter Password" type="password" className="auth-input">
                        
                    </input>
                    <div onClick={()=>{
                        RegisterRequest(dispatch, {mail: authData.login, password: authData.password})
                    }} className="auth-button">
                        Login
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;