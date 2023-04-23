import React from 'react';

const Auth = () => {
    return (
        <section className="auth-section">
            <div className="auth">
                <div className="auth-form">
                    <div className="auth-title">
                        Login
                    </div>
                    <input placeholder="Enter email I'd" type="text" className="auth-input">

                    </input>
                    <input placeholder="Enter Password" type="text" className="auth-input">
                        
                    </input>
                    <div className="auth-button">
                        Login
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;