import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from './authReduxSlice';
import { useLoginMutation } from './authReduxApiSlice';

import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';

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
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
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
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      // setAuth({ user, accessToken });
      // setUser('')
      resetUser('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err.originalStatus === 400) {
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
    <h1>Loading...</h1>
  ) : (
    <section>
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' ref={userRef} value={user} onChange={userInputHandler} autoComplete='off' {...userAttribs} required />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' value={pwd} onChange={pwdInputHandler} required />

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
  );

  return content;
};

export default Login;
