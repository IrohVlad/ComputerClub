import './stylereset.scss'
import './style.scss'
import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './components/App';
import { Provider } from 'react-redux'
import { store } from './redux/store';

const root = createRoot(document.querySelector('._wrapper'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)