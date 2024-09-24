import style from './Registration.module.css';

import { useState } from 'react';


export default function Registration({ showLogin, setUserInfo, setShowProfile }) {

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = [];
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
        years.push(<option key={i} value={i}>{i}</option>);
    }


    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emaililFormatError, setEmaililFormatError] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [confirmPasswordMatchError, setConfirmPasswordMatchError] = useState(false);

    const [dayOfBirth, setDayOfBirth] = useState('');
    const [dayEerror, setDayEerror] = useState(false);

    const [monthOfBirth, setMonthOfBirth] = useState('');
    const [monthError, setMonthError] = useState(false);

    const [yearOfBirth, setYearhOfBirth] = useState('');
    const [yearError, setYearError] = useState(false);

    function validateUsername() {
        if (!username.trim()) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    }

    function validateEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateEmail() {

        if (!email.trim()) {
            setEmailError(true);
            setEmaililFormatError(false);
            console.log(emailError, emaililFormatError);
        } else {
            setEmailError(false);
            validateEmailFormat(email) ? setEmaililFormatError(false) : setEmaililFormatError(true);

        }

    }

    function validatePassword() {
        if (password.trim()) {
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
    }

    function validateConfirmPassword() {
        if (confirmPassword.trim()) {
            setConfirmPasswordError(false);
            password === confirmPassword ? setConfirmPasswordMatchError(false) : setConfirmPasswordMatchError(true)
        } else {
            setConfirmPasswordError(true);
        }
    }

    function validateDayOfBirth() {
        if (dayOfBirth) {
            setDayEerror(false);
        } else {
            setDayEerror(true);
        }
    }

    function validateMonthOfBirth() {
        if (monthOfBirth) {
            setMonthError(false);
        } else {
            setMonthError(true);
        }
    }

    function validateYearOfBirth() {
        if (yearOfBirth) {
            setYearError(false);
        } else {
            setYearError(true);
        }
    }

    function validateForm(e) {
        e.preventDefault();
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        validateDayOfBirth();
        validateMonthOfBirth();
        validateYearOfBirth();
        if (!usernameError && !emailError && !emaililFormatError && !passwordError && !confirmPasswordError && !confirmPasswordMatchError && !dayEerror && !monthError && !yearError) {
            // showLogin(false);

            // setUserInfo({
            //     name: username,
            //     email: email,
            //     password: password,
            //     dob: `${dayOfBirth} ${monthOfBirth} ${yearOfBirth}`
            // });
            // setShowProfile(true);
        }

    }

    return (
        <div className={style.form_container}>
            <h2>Create an Account</h2>
            <form action="#" method="POST">

                <div className={style.input_field}>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={validateUsername}
                        name="username" placeholder="Enter your username" />
                    {usernameError && <span className='error'>Please enter username</span>}
                </div>

                <div className={style.input_field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail} name="email" placeholder="Enter your email" />
                    {emailError && !emaililFormatError && <span className='error'>Please enter email</span>}
                    {emaililFormatError && <span className='error'>Incorrect email format</span>}
                </div>

                <div className={style.input_field}>
                    <label htmlFor="password">Password</label>

                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={validatePassword} placeholder="Enter your password" />
                    {passwordError && <span className='error'>Please enter password</span>}
                </div>

                <div className={style.input_field}>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={validateConfirmPassword} type="password"
                        name="confirm_password" placeholder="Confirm your password" />
                    {confirmPasswordError && !confirmPasswordMatchError && <span className='error'>Please enter confirm password</span>}
                    {confirmPasswordMatchError && <span className='error'>Passowords do not match</span>}
                </div>

                <div className={style.input_field}>
                    <label htmlFor="dob">Date of Birth</label>
                    <div className={style.dob_select}>
                        <div>
                            <select value={dayOfBirth}
                                onChange={(e) => setDayOfBirth(e.target.value)}
                                onBlur={validateDayOfBirth}
                                className={style.input_select} name="day">
                                <option value="" disabled>Day</option>
                                {
                                    [...Array(31).keys()].map((_, index) => {
                                        return <option key={index} value={index + 1}>{index + 1}</option>
                                    })
                                }
                            </select>
                            {dayEerror && <span className='error'>Select Day</span>}
                        </div>
                        <div>
                            <select value={monthOfBirth}
                                onChange={(e) => setMonthOfBirth(e.target.value)}
                                onBlur={validateMonthOfBirth}
                                className={style.input_select} name="month">
                                <option value="" disabled>Month</option>
                                {
                                    monthNames.map((month, index) => {
                                        return <option key={index} value={month}>{month}</option>
                                    })
                                }
                            </select>
                            {monthError && <span className='error'>Select Month</span>}
                        </div>
                        <div>
                            <select value={yearOfBirth}
                                onChange={(e) => setYearhOfBirth(e.target.value)}
                                onBlur={validateYearOfBirth}
                                className={style.input_select} name="year" required>
                                <option value="" disabled>Year</option>
                                {years}
                            </select>
                            {yearError && <span className='error'>Select Year</span>}
                        </div>
                    </div>
                </div>

                <button className={style.register_btn} onClick={validateForm}>Register</button>
                <p className={style.signup_link}>Already have an account?
                    <span onClick={() => showLogin(true)}>Login here</span>
                </p>
            </form>
        </div>
    )
}