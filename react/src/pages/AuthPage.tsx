import React from 'react';
import Header from '../components/Header';
import Auth from '../components/Auth';

const AuthPage: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <Auth/>
            </main>
        </>
    );
};

export default AuthPage;