import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import axios from 'axios';
import { signin, logOutAuto } from '../action/userAction.js';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  //query string url parameter
  // const redirect = props.location.search
  // ? props.location.search.split('=')[1]
  // : '/';
  const navigate = useNavigate();

  //query string url parameter
  // const redirect = navigate('/', {replace: true})

  const [values, setValues] = useState({
    // email: 'adeex@gmail.com',
    // password: 'Adeex@123',
    // name: 'nonadmin',
    email: 'nonAdmin@gmail.com',
    password: 'NonAdmin@890'
  });

  const { email, password } = values;

  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  // useEffect(()=>{
  //     if  (isAuthenticated){
  //         history.push('/');
  //     }

  // }, [dispatch, isAuthenticated, error, history])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(logOutAuto());
      navigate('/cart');
    }
  }, [dispatch, navigate, isAuthenticated]);

  // get the values in the form
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  //send values to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  
  };

  return (
    <div>
      <Menu />
      {/* <Header title="Sign Up" description="Please sign up to our application"/> */}
      <div className='container custom_class'>
        <h2 className='signup_title '>SIGN IN </h2>
        <form className=' col-sm-6 offset-3 pt-5 signup_form'>
          <div className='form-outline mb-4'>
            <input onChange={handleChange('email')} type='email' id='email' className='form-control' value={email} />
            <label className='form-label' htmlFor='email'>
              Email{' '}
            </label>
          </div>

          <div className='form-outline mb-4'>
            <input onChange={handleChange('password')} type='password' id='password' className='form-control' value={password} />
            <label className='form-label' htmlFor='password'>
              Password
            </label>
          </div>

          <button onClick={handleSubmit} type='submit' className='btn btn-primary btn-block mb-4'>
            Sign In
          </button>
          <h6>Not a user? {<Link to='/signup'>Sign Up</Link>} </h6>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
