import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { setCredentials } from './authSlice';
import { useRegisterUserMutation } from '../../api/authApiSlice';

import { mobile } from '../../../responsive';
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [pwdConfirm, setPwdConfirm] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  // useNametest
  // useNameTest@test.com
  // Bb@12345

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  // const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [username, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await registerUser({ username, email, password }).unwrap();
      console.log(newUser);

      // dispatch(setCredentials({ ...newUser, username }));
      // console.log(newUser);
      setUsername('');
      setEmail('');
      setPassword('');

      navigate('/cart');
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  // const handlePwdConfirmInput = (e) => setPwdConfirm(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Container>
      <Wrapper>
        <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
          {errMsg}
        </p>
        <Title>Create An Account</Title>
        <Form onSubmit={handleSubmit}>
          <Input type='text' ref={userRef} value={username} placeholder='username' onChange={handleUsernameInput} autoComplete='off' required />

          <Input type='email' ref={userRef} value={email} placeholder='email' onChange={handleEmailInput} autoComplete='off' required />

          <Input type='password' ref={userRef} value={password} placeholder='password' onChange={handlePasswordInput} />

          {/* <Input type='pwdConfirm' ref={userRef} value={pwdConfirm} placeholder='confirm-password' onChange={handlePwdConfirmInput} /> */}

          {/* <Button onClick={handleClick} disabled={isLoading}>  */}
          <Button>LOGIN</Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          <Link>FORGET YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );

  return content;
};
export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

// const Error = styled.span`
//   color: red;
// `;
