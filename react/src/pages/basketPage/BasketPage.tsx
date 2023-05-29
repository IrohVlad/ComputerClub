import React from 'react';
import Header from '../../widgets/header/Header'
import Footer from '../../widgets/footer/Footer'
import Basket from '../../widgets/basket/Basket';

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