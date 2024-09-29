import style from './Registration.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as  Yup from 'yup';

import { useState } from 'react';


export default function Registration({ showLogin, setUserInfo, setShowProfile }) {

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = [];
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
        years.push(<option key={i} value={i}>{i}</option>);
    }

    // const [dayOfBirth, setDayOfBirth] = useState('');
    // const [dayEerror, setDayEerror] = useState(false);

    // const [monthOfBirth, setMonthOfBirth] = useState('');
    // const [monthError, setMonthError] = useState(false);

    // const [yearOfBirth, setYearhOfBirth] = useState('');
    // const [yearError, setYearError] = useState(false);

    // function validateDayOfBirth() {
    //     if (dayOfBirth) {
    //         setDayEerror(false);
    //     } else {
    //         setDayEerror(true);
    //     }
    // }

    // function validateMonthOfBirth() {
    //     if (monthOfBirth) {
    //         setMonthError(false);
    //     } else {
    //         setMonthError(true);
    //     }
    // }

    // function validateYearOfBirth() {
    //     if (yearOfBirth) {
    //         setYearError(false);
    //     } else {
    //         setYearError(true);
    //     }
    // }

    function validateForm(e) {
        e.preventDefault();
        // validateDayOfBirth();
        // validateMonthOfBirth();
        // validateYearOfBirth();
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

    const schema = Yup.object().shape({
        username: Yup.string()
            .min(6, "Username must be at least 6 characters")
            .max(30, 'Username must not exceed 30 characters').
            required('Please enter username'),
        email: Yup.string().required('Email enter username')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Incorrect email format'),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .max(30, 'Password must not exceed 30 characters')
            .required('Please enter password')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character(@$!%*?&)'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passowords do not match")
            .required('Please enter confirm password'),
        dayOfBirth: Yup.string().required('Please select day'),
        monthOfBirth: Yup.string().required('Please select month'),
        yearOfBirth: Yup.string().required('Please select year')
    })
    return (
        <div className={style.form_container}>
            <h2>Create an Account</h2>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    dayOfBirth: '',
                    monthOfBirth: '',
                    yearOfBirth: ''
                }}
                onSubmit={(val) => console.log(val)}
                validateOnBlur
                validationSchema={schema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Form>
                        <div className={style.input_field}>
                            <label htmlFor="username">User Name</label>
                            <Field
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                id="username"
                                name="username" placeholder="Username"
                                className={style.input} />
                            <span className='error'><ErrorMessage name="username" /></span>
                        </div>

                        <div className={style.input_field}>
                            <label htmlFor="email">Email</label>
                            <Field
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                id="email"
                                name="email" placeholder="Enter your email"
                                className={style.input} />
                            <span className='error'><ErrorMessage name="email" /></span>
                        </div>

                        <div className={style.input_field}>
                            <label htmlFor="password">Password</label>
                            <Field
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                type="password"
                                id="password"
                                name="password" placeholder="*******"
                                className={style.input} />
                            <span className='error'><ErrorMessage name="password" /></span>
                        </div>

                        <div className={style.input_field}>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword" placeholder="*******"
                                className={style.input} />
                            <span className='error'><ErrorMessage name="confirmPassword" /></span>
                        </div>

                        <div className={style.input_field}>
                            <label htmlFor="dob">Date of Birth</label>
                            <div className={style.dob_select}>
                                <div>
                                    <Field as="select" value={values.dayOfBirth}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={style.input_select} name="day">
                                        <option value="" disabled>Day</option>
                                        {
                                            [...Array(31).keys()].map((_, index) => {
                                                return <option key={index + 1} value={index + 1}>{index + 1}</option>
                                            })
                                        }
                                    </Field>
                                    <span className='error'><ErrorMessage name="dayOfBirth" /></span>
                                </div>
                                <div>
                                    <select value={values.monthOfBirth}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={style.input_select} name="month">
                                        <option value="" disabled>Month</option>
                                        {
                                            monthNames.map((month, index) => {
                                                return <option key={index} value={month}>{month}</option>
                                            })
                                        }
                                    </select>
                                    <span className='error'><ErrorMessage name="monthOfBirth" /></span>
                                </div>
                                <div>
                                    <Field as="select" value={values.yearOfBirth}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={style.input_select} name="year" required>
                                        <option value="" disabled>Year</option>
                                        {years}
                                    </Field>
                                    <span className='error'><ErrorMessage name="yearOfBirth" /></span>
                                </div>
                            </div>
                        </div>


                        <button className={style.register_btn}
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type='submit'>Register</button>

                        <p className={style.signup_link}>Already have an account?
                            <span onClick={() => showLogin(true)}>Login here</span>
                        </p>
                    </Form>
                )}
            </Formik>

        </div>
    )
}