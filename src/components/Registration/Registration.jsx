import style from './Registration.module.css';

import { useState } from 'react';


export default function Registration({ showRegistration }) {

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = [];
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
        years.push(<option key={i} value={i}>{i}</option>);
    }

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
                    <label htmlFor="dob">Date of Birth</label>
                    <div className="dob-select">
                        <select className={style.input_select} name="day" required>
                            <option value="" disabled defaultValue={"Day"}>Day</option>
                            {
                                [...Array(31).keys()].map((_, index) => {
                                    return <option key={index} value={index + 1}>{index + 1}</option>
                                })
                            }

                        </select>

                        <select className={style.input_select} name="month" required>
                            <option value="" disabled defaultValue={"Month"}>Month</option>
                            {
                                monthNames.map((month, index) => {
                                    return <option key={index} value={month}>{month}</option>
                                })
                            }
                        </select>

                        <select className={style.input_select} name="year" required>
                            <option value="" disabled >Year</option>

                            {years}

                        </select>
                    </div>
                </div>





                <button className={style.register_btn}>Register</button>
                <p className={style.signup_link}>Already have an account? <span onClick={showRegistration}>Login here</span></p>
            </form>
        </div>
    )
}