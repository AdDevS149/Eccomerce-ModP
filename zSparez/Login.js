// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../auth/authSlice";
// import { useNavigate } from "react-router-dom";
// import { StyledForm } from "./StyledForm";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     if (auth._id) {
//       navigate("/cart");
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
//         <input
//           type="email"
//           placeholder="email"
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//         />
//         <button>
//           {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
//         </button>
//         {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
//       </StyledForm>
//     </>
//   );
// };

// export default Login;


// // import { useRef, useState, useEffect } from 'react';
// // import { Link, useNavigate /*useLocation*/ } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // import { useDispatch } from 'react-redux';
// // import { setCredentials } from './authSlice';
// // import { useLoginMutation } from './authApiSlice';

// // import useInput from '../../hooks/useInput';
// // import useToggle from '../../hooks/useToggle';

// // import { FaSignInAlt } from 'react-icons/fa';
// // // import { Container } from '@mui/system';

// // import styled from 'styled-components';
// // import { mobile } from '../../responsive';

// // const Container = styled.div`
// //   width: 100vw;
// //   height: 100vh;
// //   background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('') center;
// //   background-size: cover;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// // `;

// // const Wrapper = styled.div`
// //   width: 25%;
// //   padding: 20px;
// //   background-color: white;
// //   ${mobile({ width: '75%' })}
// // `;

// // const Title = styled.h1`
// //   font-size: 24px;
// //   font-weight: 300;
// // `;

// // const Form = styled.form`
// //   display: flex;
// //   flex-direction: column;
// // `;

// // const Input = styled.input`
// //   flex: 1;
// //   min-width: 40%;
// //   margin: 10px 0;
// //   padding: 10px;
// // `;

// // const Button = styled.button`
// //   width: 40%;
// //   border: none;
// //   padding: 15px 20px;
// //   background-color: teal;
// //   color: white;
// //   cursor: pointer;
// //   margin-bottom: 10px;
// //   &:disabled {
// //     color: green;
// //     cursor: not-allowed;
// //   }
// // `;

// // const Login = () => {
// //   const userRef = useRef();
// //   const errRef = useRef();
// //   const [user, resetUser, userAttribs] = useInput('user', '');
// //   const [pwd, setPwd] = useState('@123456Ja');
// //   const [errMsg, setErrMsg] = useState('');
// //   const navigate = useNavigate();

// //   const [login, { isLoading }] = useLoginMutation();
// //   const dispatch = useDispatch();

// //   // const { setAuth } = useAuth();
// //   // const location = useLocation();
// //   // const from = location.state?.from?.pathname || '/';
// //   const [check, toggleCheck] = useToggle('persist', false);

// //   useEffect(() => {
// //     userRef.current.focus();
// //   }, []);

// //   useEffect(() => {
// //     setErrMsg('');
// //   }, [user, pwd]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // login function from the login mutation
// //       // unwrap allows to use try/catch block

// //       // basically calling backend as if using axios
// //       const userData = await login({ user, pwd }).unwrap();
// //       //getting access token here
// //       dispatch(setCredentials({ ...userData, user }));
// //       toast.success('Login successful!');
// //       // setAuth({ user, accessToken });
// //       // setUser('')
// //       resetUser('');
// //       setPwd('');
// //       navigate('/welcome');
// //     } catch (err) {
// //       if (!err.originalStatus === 400) {
// //         toast.error('No Server Response');
// //         // setErrMsg('No Server Response');
// //       } else if (err.originalStatus === 400) {
// //         toast.error('Missing Username or Password');
// //         // setErrMsg('Missing Username or Password');
// //       } else if (err.originalStatus === 401) {
// //         toast.error('Unauthorized!');
// //         // setErrMsg('Unauthorized');
// //       } else {
// //         toast.error('Login Failed');
// //         // setErrMsg('Login Failed');
// //       }
// //       errRef.current.focus();
// //     }
// //   };

// //   const userInputHandler = (e) => resetUser(e.target.value);
// //   const pwdInputHandler = (e) => setPwd(e.target.value);

// //   const content = isLoading ? (
// //     // put loading spinner later

// //     <h1>Loading...</h1>
// //   ) : (
// //     <>
// //       <Container>
// //         <Wrapper>
// //           <section className='form'>
// //             <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
// //               {errMsg}
// //             </p>
// //             <Title>
// //               <FaSignInAlt />
// //               Login In
// //             </Title>
// //             <Form onSubmit={handleSubmit}>
// //               {/* <label htmlFor='username'>Username:</label> */}

// //               <Input
// //                 type='text'
// //                 // className='form-control'
// //                 placeholder='username'
// //                 id='username'
// //                 name='username'
// //                 ref={userRef}
// //                 value={user}
// //                 onChange={userInputHandler}
// //                 autoComplete='off'
// //                 {...userAttribs}
// //                 required
// //               />
// //               {/* <Button></Button> */}

// //               {/* <label htmlFor='password'>Password:</label> */}
// //               <Input type='password' className='form-control' id='password' name='password' value={pwd} onChange={pwdInputHandler} required />

// //               <Button onSubmit={handleSubmit} disabled={isLoading}>
// //                 Sign In
// //               </Button>

// //               <div className='persistCheck'>
// //                 <input type='checkbox' id='persist' onChange={toggleCheck} checked={check} />
// //                 <label htmlFor='persist'>Trust This Device</label>
// //               </div>
// //             </Form>
// //             <p>
// //               Need an Account?
// //               <br />
// //               <span className='line'>
// //                 <Link to='/register'>Sign Up</Link>
// //               </span>
// //             </p>
// //           </section>
// //         </Wrapper>
// //       </Container>
// //     </>
// //   );

// //   return content;
// // };

// // export default Login;

// // // import { useState, useEffect } from 'react'
// // // import { FaSignInAlt } from 'react-icons/fa'
// // // import { useSelector, useDispatch } from 'react-redux'
// // // import { useNavigate } from 'react-router-dom'
// // // import { toast } from 'react-toastify'
// // // import { login, reset } from '../features/auth/authSlice'
// // // import Spinner from '../components/Spinner'

// // // function Login() {
// // //   const [formData, setFormData] = useState({
// // //     email: '',
// // //     password: '',
// // //   })

// // //   const { email, password } = formData

// // // //   const navigate = useNavigate()
// // // //   const dispatch = useDispatch()

// // // //   const { user, isLoading, isError, isSuccess, message } = useSelector(
// // // //     (state) => state.auth
// // // //   )

// // // //   useEffect(() => {
// // // //     if (isError) {
// // // //       toast.error(message)
// // // //     }

// // // //     if (isSuccess || user) {
// // // //       navigate('/')
// // // //     }

// // // //     dispatch(reset())
// // // //   }, [user, isError, isSuccess, message, navigate, dispatch])

// // //   const onChange = (e) => {
// // //     setFormData((prevState) => ({
// // //       ...prevState,
// // //       [e.target.name]: e.target.value,
// // //     }))
// // //   }

// // //   const onSubmit = (e) => {
// // //     e.preventDefault()

// // //     // const userData = {
// // //     //   email,
// // //     //   password,
// // //     // }

// // // //     dispatch(login(userData))
// // // //   }

// // // //   if (isLoading) {
// // // //     return <Spinner />
// // //   }

// // //   return (
// // //     <>
// // //       <section className='heading'>
// // //         <h1>
// // //           <FaSignInAlt /> Login
// // //         </h1>
// // //         <p>Login and start setting goals</p>
// // //       </section>

// // //       <section className='form'>
// // //         <form onSubmit={onSubmit}>
// // //           <div className='form-group'>
// // //             <input
// // //               type='email'
// // //               className='form-control'
// // //               id='email'
// // //               name='email'
// // //               value={email}
// // //               placeholder='Enter your email'
// // //               onChange={onChange}
// // //             />
// // //           </div>
// // //           <div className='form-group'>
// // //             <input
// // //               type='password'
// // //               className='form-control'
// // //               id='password'
// // //               name='password'
// // //               value={password}
// // //               placeholder='Enter password'
// // //               onChange={onChange}
// // //             />
// // //           </div>

// // //           <div className='form-group'>
// // //             <button type='submit' className='btn btn-block'>
// // //               Submit
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </section>
// // //     </>
// // //   )
// // // }

// // // export default Login
