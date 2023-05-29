import React from 'react';

const AuthInput = ({onChange, placeholder, type = 'text'}) => {
    return (
        <input type={type} onChange={onChange} placeholder={placeholder} className='auth-input'>
        </input>
    );
};

export default AuthInput;