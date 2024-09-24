import style from './Login.module.css';

import { useState } from 'react';

export default function Login({ showRegistration }) {
    const [login, setLogin] = useState('');
    const [loginError, setLoginError] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    function loginUser(e) {
        e.preventDefault();
        validateLogin();
        validatePassword();
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateLogin() {
        if (!login.trim()) {
            setLoginError(true);
        } else {
            console.log(validateEmail(login));
            setLoginError(false);
        }

    }

    function validatePassword() {
        if (!password.trim()) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    return (
        <div className={style.login_form_container}>
            <h2>Login</h2>
            <p>Welcome back! Please login to your account.</p>
            <form>
                <label htmlFor="username">User Name</label>
                <input type="text" value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    onBlur={validateLogin} placeholder="username@gmail.com" />
                {loginError && <span className='error'>Please enter Login</span>}

                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                {passwordError && <span className='error'>Please enter Password</span>}

                <button onClick={loginUser}>Login</button>

                <p className={style.signup_link}>New User? <span onClick={showRegistration}>Signup</span></p>
            </form>
        </div>
    )
}