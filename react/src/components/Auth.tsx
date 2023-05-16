import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { RegisterRequest, LoginRequest } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [authData, setAuthData] = React.useState({login: '', password: ''})
    const [state, setState] = React.useState({name: ''})
    const Auth = useSelector((store: RootState) => store.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(()=>{
        console.log(authData)
    }, [authData])
    return (
        <section className="auth-section">
            <div className="auth">
                <div className="auth-form">
                    <div className="auth-title">
                        { !state.name ? 'Signup' : 'Login'}
                    </div>
                    <input onChange={(e)=>{
                        setAuthData({...authData, login: e.target.value});
                    }} placeholder="Enter email I'd" type="text" className="auth-input">
                    </input>
                    <input onChange={(e)=>{
                        setAuthData({...authData, password: e.target.value});
                    }} placeholder="Enter Password" type="password" className="auth-input">
                    </input>
                        {Object.keys(Auth.errors).length ? Object.keys(Auth.errors).map(key=>{
                            return <div className="auth-error">{Auth.errors[key]}</div>
                        }) : ''}

                    { !state.name ? 
                    <div onClick={()=>{
                        RegisterRequest(dispatch, {email: authData.login, password: authData.password})
                    }} className="auth-button">
                        Signup
                    </div> :
                    <div onClick={()=>{
                        LoginRequest(dispatch, {email: authData.login, password: authData.password})
                    }} className="auth-button">
                        Login
                    </div>}
                    <div onClick={()=>{
                        if(state.name){
                            setState({name: ''});
                        } else{
                            setState({name: 'login'});
                        }
                    }} className="auth-state-button">
                        { state.name ? 'create account' : 'login if account already exist'}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;