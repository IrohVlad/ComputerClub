import React from 'react';
import Header from '../../widgets/header/Header';
import Hero from '../../widgets/hero/Hero';
import Footer from '../../widgets/footer/Footer';
import MainCard from '../../components/MainCard';

const MainPage = () => {
    return (
        <>
            <div className="red-ball _light__fore2"></div>
            <div className="red-light _light__fore1"></div>
            <div className="purple-light _light__fore1"></div>
            <div className="purple-ball _light1"></div>
            <div className="red-ball-2 _light__fore2"></div>
            <Header/>
            <main>
                <Hero/>
                <MainCard/>
            </main>
            <Footer/>
        </>
    );
};

export default MainPage;