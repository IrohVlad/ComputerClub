import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routes} from './RouterApp';
import MainPage from '../pages/MainPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((value, index) => {
                    return <Route element={value.page} path={value.route} key={index}/>
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default App;