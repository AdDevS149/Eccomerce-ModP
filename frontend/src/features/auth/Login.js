import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, /*useLocation*/ } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { useLoginMutation } from './authApiSlice';

import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';

import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, resetUser, userAttribs] = useInput('user', '');
  const [pwd, setPwd] = useState('@123456Ja');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  // const { setAuth } = useAuth();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || '/';
  const [check, toggleCheck] = useToggle('persist', false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // login function from the login mutation
      // unwrap allows to use try/catch block

      // basically calling backend as if using axios
      const userData = await login({ user, pwd }).unwrap();
      //getting access token here
      dispatch(setCredentials({ ...userData, user }));
      // setAuth({ user, accessToken });
      // setUser('')
      resetUser('');
      setPwd('');
      navigate('/welcome');
    } catch (err) {
      if (!err.originalStatus === 400) {
        //Use toast (toast.error(yadayadayads))
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
  };

  const userInputHandler = (e) => resetUser(e.target.value);
  const pwdInputHandler = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    // put loading spinner later
    
    <h1>Loading...</h1>
  ) : (
    <>
      <section className='form'>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
          {errMsg}
        </p>
        <h1>
          <FaSignInAlt />
          Login In
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <div className='form-group'>
            <input type='text' className='form-control' id='username' name='username' ref={userRef} value={user} onChange={userInputHandler} autoComplete='off' {...userAttribs} required />
          </div>
          <label htmlFor='password'>Password:</label>
          <div className='form-group'>
            <input type='password' className='form-control' id='password' name='password' value={pwd} onChange={pwdInputHandler} required />
          </div>
          <button>Sign In</button>
          <div className='persistCheck'>
            <input type='checkbox' id='persist' onChange={toggleCheck} checked={check} />
            <label htmlFor='persist'>Trust This Device</label>
          </div>
        </form>

        <p>
          Need an Account?
          <br />
          <span className='line'>
            <Link to='/register'>Sign Up</Link>
          </span>
        </p>
      </section>
    </>
  );

  return content;
};

export default Login;

// import { useState, useEffect } from 'react'
// import { FaSignInAlt } from 'react-icons/fa'
// import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { login, reset } from '../features/auth/authSlice'
// import Spinner from '../components/Spinner'

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   })

//   const { email, password } = formData

// //   const navigate = useNavigate()
// //   const dispatch = useDispatch()

// //   const { user, isLoading, isError, isSuccess, message } = useSelector(
// //     (state) => state.auth
// //   )

// //   useEffect(() => {
// //     if (isError) {
// //       toast.error(message)
// //     }

// //     if (isSuccess || user) {
// //       navigate('/')
// //     }

// //     dispatch(reset())
// //   }, [user, isError, isSuccess, message, navigate, dispatch])

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const onSubmit = (e) => {
//     e.preventDefault()

//     // const userData = {
//     //   email,
//     //   password,
//     // }

// //     dispatch(login(userData))
// //   }

// //   if (isLoading) {
// //     return <Spinner />
//   }

//   return (
//     <>
//       <section className='heading'>
//         <h1>
//           <FaSignInAlt /> Login
//         </h1>
//         <p>Login and start setting goals</p>
//       </section>

//       <section className='form'>
//         <form onSubmit={onSubmit}>
//           <div className='form-group'>
//             <input
//               type='email'
//               className='form-control'
//               id='email'
//               name='email'
//               value={email}
//               placeholder='Enter your email'
//               onChange={onChange}
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='password'
//               className='form-control'
//               id='password'
//               name='password'
//               value={password}
//               placeholder='Enter password'
//               onChange={onChange}
//             />
//           </div>

//           <div className='form-group'>
//             <button type='submit' className='btn btn-block'>
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>
//     </>
//   )
// }

// export default Login
