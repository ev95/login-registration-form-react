import style from './Login.module.css';
import { Formik, Field, Form } from 'formik';
import * as  Yup from 'yup';

export default function Login({ showRegistration }) {

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(6, "Username must be at least 6 characters").max(30, 'Username must not exceed 30 characters').required('Please enter username'),
        password: Yup.string().min(6, "Password must be at least 6 characters")
            .max(30, 'Password must not exceed 30 characters')
            .required('Please enter password')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character(@$!%*?&)'),
    })

    return (
        <div className={style.login_form_container}>
            <h2>Login</h2>
            <p>Welcome back! Please login to your account.</p>
            <Formik
                initialValues={{
                    username: '',
                    password: ''

                }}
                onSubmit={(value) => console.log(value)}
                validateOnBlur
                validationSchema={validationSchema}>

                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Form>
                        <label htmlFor="username">User Name</label>
                        <Field
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            id="username"
                            name="username" placeholder="Username"
                            className={style.input} />
                        <span className='error'><ErrorMessage name="username" /></span>
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

                        <button disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type='submit'>Login</button>
                        <p className={style.signup_link}>New User? <span onClick={showRegistration}>Signup</span></p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}