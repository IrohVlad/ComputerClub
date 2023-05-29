import React from 'react';
import Header from '../../../widgets/header/Header';
import Auth from '../../../features/auth';

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