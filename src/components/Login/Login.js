import React from 'react';
import logo from '../Login/communityBank.svg';
import '../Login/Login.css'

export default function Login() {
    return (
        <div className ="App">
            <img src={logo} alt='mainLogo' />
            <a href={process.env.REACT_APP_LOGIN}>
                <button>Login</button>
            </a>

        </div>
    )
}