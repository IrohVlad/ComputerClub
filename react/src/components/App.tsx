import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routes, userRoutes, adminRoutes} from './RouterApp';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshRequest } from '../redux/authSlice';



const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState)=> state.auth);
    React.useEffect(()=>{
        RefreshRequest(dispatch);
    }, [])
    return (
        !auth.before ?
            <BrowserRouter>
            <Routes>
                {!auth.auth && routes.map((value, index) => {
                    return <Route element={value.page} path={value.route} key={index}/>
                })}
                {auth.auth && auth.role == 'USER' && userRoutes.map((value, index) => {
                    return <Route element={value.page} path={value.route} key={index}/>
                })}
                {auth.auth && auth.role == 'ADMIN' && adminRoutes.map((value, index) => {
                    return <Route element={value.page} path={value.route} key={index}/>
                })}
            </Routes>
        </BrowserRouter> : <></>
    );
};

export default App;