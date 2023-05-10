import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MainCard from '../components/MainCard';

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