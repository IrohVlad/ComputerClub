import './stylereset.scss'
import './style.scss'
import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux'
import { store } from '../store/store';

const root = createRoot(document.querySelector('._wrapper'));

root.render( 
    <Provider store={store}>
        <App/>
    </Provider>
)