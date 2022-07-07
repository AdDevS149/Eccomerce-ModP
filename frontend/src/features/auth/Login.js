import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    // const [user, setUser] = useState('')
    const [email, setEmail] = useState('adee@test.com')
    const [pwd, setPwd] = useState('AaB$12345')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    // adee
    // adee@test.com;
    // AaB$12345

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ email, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, email }))
            setEmail('')
            setPwd('')
            navigate('/welcome')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setEmail(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Employee Login</h1>

            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                /> */}

<label htmlFor="username">Email:</label>
                <input
                    type="email"
                    id="email"
                    ref={userRef}
                    value={email}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePwdInput}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
        </section>
    )

    return content
}
export default Login


// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../slices/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { StyledForm } from './StyledForm';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);

//   const [user, setUser] = useState({
//     email: 'adeex@test.com',
//     password: '123456',
//   });

//   useEffect(() => {
//     if (auth._id) {
//       navigate('/cart');
//     }
//   }, [auth._id, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(user);
//     dispatch(loginUser(user));
//   };

//   return (
//     <>
//       <StyledForm onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input type='email' placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
//         <input type='password' placeholder='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
//         <button>{auth.loginStatus === 'pending' ? 'Submitting...' : 'Login'}</button>
//         {auth.loginStatus === 'rejected' ? <p>{auth.loginError}</p> : null}
//       </StyledForm>
//     </>
//   );
// };

// export default Login;
