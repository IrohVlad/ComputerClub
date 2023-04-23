import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Basket from '../components/Basket';

const BasketPage = () => {
    return (
        <>
            <Header/>
            <main>
                <Basket/>
            </main>
            <Footer/>
        </>
    );
};

export default BasketPage;