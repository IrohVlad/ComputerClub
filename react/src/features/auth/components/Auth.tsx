import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterRequest, LoginRequest } from '../';
import { useNavigate } from 'react-router-dom';
import {authState} from '../';
import AuthInput from '../../../shared';
interface IAuth {
    auth: authState;
    [key: string]: any;
}
const Auth = () => {
    const [authData, setAuthData] = React.useState({login: '', password: ''})
    const [state, setState] = React.useState({name: ''})
    const Auth = useSelector((store: IAuth) => store.auth)
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
                    {/* <input onChange={(e)=>{
                        setAuthData({...authData, login: e.target.value});
                    }} placeholder="Enter email I'd" type="text" className="auth-input">
                    </input> */}
                    <AuthInput placeholder={"Enter email I'd"} onChange={(event: ChangeEvent<HTMLInputElement>)=>{
                        setAuthData({...authData, login: event.target.value});
                    }} />
                    <AuthInput placeholder={"Enter Password"} type='password' onChange={(event: ChangeEvent<HTMLInputElement>)=>{
                        setAuthData({...authData, password: event.target.value});
                    }} />
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