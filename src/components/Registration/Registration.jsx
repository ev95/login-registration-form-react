import style from './Registration.module.css';

import { useState } from 'react';


export default function Registration({ showRegistration }) {
    return (
        <div className={style.form_container}>
            <h2>Create an Account</h2>
            <form action="#" method="POST">
                <div className={style.input_field}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required placeholder="Enter your username" />
                </div>
                <div className={style.input_field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email" />
                </div>
                <div className={style.input_field}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password" />
                </div>
                <div className={style.input_field}>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" id="confirm_password" name="confirm_password" required placeholder="Confirm your password" />
                </div>
                <div className={style.input_field}>
                    <label>
                        <input type="checkbox" name="terms" required /> I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>


                <button type="submit" className={style.register_btn}>Register</button>
                <p>Already have an account? <span onClick={showRegistration}>Login here</span></p>
            </form>
        </div>
    )
}