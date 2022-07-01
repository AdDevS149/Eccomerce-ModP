import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from './authSlice';
import { StyledForm } from '../auth/StyledForm';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUp = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const auth = useSelector((state) => state.auth);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // not include the full url the other part is defined in the proxy in package json
      const { data } = await axios.post('/api/signup', {
        name,
        email,
        password,
      });

      console.log(data);
      console.log(data.success === true);

      // clear form if user signed in successfully
      if (data.success === true) {
        setValues({ name: '', email: '', password: '' });
        toast.success('Register was Successful. You can Login in now');
      }
    } catch (err) {
      console.log();
      toast.error(err.response.data.error);
    }
  };

  return (
    <>
      <StyledForm>
        <h2>Sign Up</h2>
        <label htmlFor='formRegister'>Name</label>
        <input onChange={handleChange('name')} type='text' id='formRegister' value={name} placeholder='name' />

        <label htmlFor='formEmail'>Email</label>
        <input onChange={handleChange('email')} type='email' id='formEmail' value={email} placeholder='email' />

        <label htmlFor='formPassword'>Password</label>
        <input onChange={handleChange('password')} type='password' id='formPassword' value={password} placeholder='password' />

        <button onClick={onSubmitHandler} type='submit'>
          Register
        </button>
      </StyledForm>
    </>
  );
};

export default SignUp;

// import { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../auth/authSlice";
// import { StyledForm } from "./StyledForm";

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const auth = useSelector((state) => state.auth);

//   console.log(auth)

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//    "email": "adeex@gmail.com",
//     "password": "adeex@"

//   console.log('user', user)

// //   useEffect(() => {
// //     if (auth._id) {
// //       navigate("/cart");
// //     }
// //   }, [auth._id, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(user);
//     dispatch(registerUser(user));
//   };

//   return (
//     <>
//       <StyledForm onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder="name"
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//         />
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
//           {auth.register === "pending" ? "Submitting..." : "Register"}
//         </button>
//         {auth.registerStatus === "rejected" ? (
//           <p>{auth.registerError}</p>
//         ) : null}
//       </StyledForm>
//     </>
//   );
// };

// export default Register;

// // import { useRef, useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import axios from '../api/axios';
// // import { useDispatch } from 'react-redux';
// // import { setCredentials } from './registerSlice';
// // import { useRegisterUserMutation } from '../../features/register/registerApiSlice';

// // import styled from 'styled-components';
// // import { mobile } from '../../responsive';

// // // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// // // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// // const Register = () => {
// //   const [registerUser] = useRegisterUserMutation();
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const userRef = useRef();
// //   const errRef = useRef();

// //   const [user, setUser] = useState('');
// //   const [validName, setValidName] = useState(false);
// //   const [userFocus, setUserFocus] = useState(false);

// //   const [pwd, setPwd] = useState('');
// //   const [validPwd, setValidPwd] = useState(false);
// //   const [pwdFocus, setPwdFocus] = useState(false);

// //   const [matchPwd, setMatchPwd] = useState('');
// //   const [validMatch, setValidMatch] = useState(false);
// //   const [matchFocus, setMatchFocus] = useState(false);

// //   const [errMsg, setErrMsg] = useState('');
// //   const [success, setSuccess] = useState(false);

// //   const Container = styled.div`
// //   width: 100vw;
// //   height: 100vh;
// //   background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('') center;
// //   background-size: cover;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// // `;

// // const Wrapper = styled.div`
// //   width: 40%;
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
// //   flex-wrap: wrap;
// // `;

// // const Input = styled.input`
// //   flex: 1;
// //   min-width: 40%;
// //   margin: 20px 10px 0px 0px;
// //   padding: 10px;
// // `;

// // const Button = styled.button`
// //   width: 40%;
// //   border: none;
// //   padding: 15px 20px;
// //   background-color: teal;
// //   color: white;
// //   cursor: pointer;
// // `;

// //   useEffect(() => {
// //     userRef.current.focus();
// //   }, []);

// //   // useEffect(() => {
// //   //   setValidName(USER_REGEX.test(user));
// //   // }, [user]);

// //   useEffect(() => {
// //     // setValidPwd(PWD_REGEX.test(pwd));
// //     setValidMatch(pwd === matchPwd);
// //   }, [pwd, matchPwd]);

// //   useEffect(() => {
// //     setErrMsg('');
// //   }, [user, pwd, matchPwd]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // if button enabled with JS hack
// //     // const v1 = USER_REGEX.test(user);
// //     // const v2 = PWD_REGEX.test(pwd);
// //     // if (!v1 || !v2) {
// //     //   setErrMsg('Invalid Entry');
// //     //   return;
// //     // }
// //     try {
// //       await registerUser({ user, pwd }).unwrap();
// //       dispatch(setCredentials( user));

// //       // const response = await axios.post(REGISTER_URL,
// //       //     JSON.stringify({ user, pwd }),
// //       //     {
// //       //         headers: { 'Content-Type': 'application/json' },
// //       //         withCredentials: true
// //       //     }
// //       // );
// //       // console.log(response?.data);
// //       // console.log(response?.accessToken);
// //       // console.log(JSON.stringify(response))

// //       setSuccess(true);
// //       //clear state and controlled inputs
// //       //need value attrib on inputs for this
// //       setUser('');
// //       setPwd('');
// //       setMatchPwd('');
// //       navigate('/login');
// //     } catch (err) {
// //       if (!err?.response) {
// //         setErrMsg('No Server Response');
// //       } else if (err.response?.status === 409) {
// //         setErrMsg('Username Taken');
// //       } else {
// //         setErrMsg('Registration Failed');
// //       }
// //       errRef.current.focus();
// //     }
// //   };
// //   // const userRegisterHandler = (e) => setUser(e.target.value);
// //   // const pwdRegisterHandler = (e) => setPwd(e.target.value);
// //   // const pwdRegisterHandler = (e) => setMatchPwd(e.target.value);

// //   return (
// //     <Container>
// //     <Wrapper>
// //       {success ? (
// //         <section>
// //           <h1>Success!</h1>
// //           <p>
// //             <a href='/'>Sign In</a>
// //           </p>
// //         </section>
// //       ) : (
// //         <section>
// //           <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
// //             {errMsg}
// //           </p>
// //           <Title>Create An Account</Title>
// //           <Form onSubmit={handleSubmit}>

// //             {/* <label htmlFor='username'>
// //               Username:
// //               <FontAwesomeIcon icon={faCheck} className={validName ? 'valid' : 'hide'} />
// //               <FontAwesomeIcon icon={faTimes} className={validName || !user ? 'hide' : 'invalid'} />
// //             </label> */}
// //             <Input
// //               type='text'
// //               placeholder='username'
// //               id='username'
// //               ref={userRef}
// //               autoComplete='off'
// //               onChange={(e) => setUser(e.target.value)}
// //               value={user}
// //               required
// //               aria-invalid={validName ? 'false' : 'true'}
// //               aria-describedby='uidnote'
// //               onFocus={() => setUserFocus(true)}
// //               onBlur={() => setUserFocus(false)}
// //             />
// //             {/* <p id='uidnote' className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
// //               <FontAwesomeIcon icon={faInfoCircle} />
// //               4 to 24 characters.
// //               <br />
// //               Must begin with a letter.
// //               <br />
// //               Letters, numbers, underscores, hyphens allowed.
// //             </p> */}
// //             <label htmlFor='password'>
// //               Password:
// //               {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? 'valid' : 'hide'} />
// //               <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hide' : 'invalid'} /> */}
// //             </label>
// //             <Input
// //               type='password'
// //               placeholder='password'
// //               id='password'
// //               onChange={(e) => setPwd(e.target.value)}
// //               value={pwd}
// //               required
// //               aria-invalid={validPwd ? 'false' : 'true'}
// //               aria-describedby='pwdnote'
// //               onFocus={() => setPwdFocus(true)}
// //               onBlur={() => setPwdFocus(false)}
// //             />

// //             <label htmlFor='password'>
// //               Password:
// //               {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? 'valid' : 'hide'} />
// //               <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hide' : 'invalid'} /> */}
// //             </label>
// //             <Input
// //               type='password'
// //               placeholder='password'
// //               id='password'
// //               onChange={(e) => setPwd(e.target.value)}
// //               value={pwd}
// //               required
// //               aria-invalid={validPwd ? 'false' : 'true'}
// //               aria-describedby='pwdnote'
// //               onFocus={() => setPwdFocus(true)}
// //               onBlur={() => setPwdFocus(false)}
// //             />
// //             {/* <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
// //               <FontAwesomeIcon icon={faInfoCircle} />
// //               8 to 24 characters.
// //               <br />
// //               Must include uppercase and lowercase letters, a number and a special character.
// //               <br />
// //               Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span> <span aria-label='dollar sign'>$</span>{' '}
// //               <span aria-label='percent'>%</span>
// //             </p> */}

// //             <label htmlFor='confirm_pwd'>
// //               Confirm Password:
// //               {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? 'valid' : 'hide'} />
// //               <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? 'hide' : 'invalid'} /> */}
// //             </label>
// //             <Input
// //               type='password'
// //               placeholder='confirm password'
// //               id='confirm_pwd'
// //               onChange={(e) => setMatchPwd(e.target.value)}
// //               value={matchPwd}
// //               required
// //               aria-invalid={validMatch ? 'false' : 'true'}
// //               aria-describedby='confirmnote'
// //               onFocus={() => setMatchFocus(true)}
// //               onBlur={() => setMatchFocus(false)}
// //             />
// //             {/* <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
// //               <FontAwesomeIcon icon={faInfoCircle} />
// //               Must match the first password input field.
// //             </p> */}

// //             {/* <Button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</Button> */}
// //             <Button>Sign Up</Button>
// //           </Form>
// //           <p>
// //             Already registered?
// //             <br />
// //             <span className='line'>
// //               {/*put router link here*/}
// //               <Link to='/login'>Sign In</Link>
// //             </span>
// //           </p>
// //         </section>
// //       )}
// //       </Wrapper>
// //     </Container>
// //   );
// // };

// // export default Register;
