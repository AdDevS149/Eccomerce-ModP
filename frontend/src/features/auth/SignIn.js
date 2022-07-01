import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from './authSlice';
import { StyledForm } from '../auth/StyledForm';
import axios from 'axios';
import { toast } from 'react-toastify';


const SignIn = () => {
  //   const dispatch = useDispatch();
    const navigate = useNavigate();
  //   const auth = useSelector((state) => state.auth);
  const [values, setValues] = useState({
    email: 'martsmart@gmail.com',
    password: 'Mart@1234',
  });

//   "name": "MartSmart",
//   "email": "martsmart@gmail.com",
//   "password": "Mart@1234"

  const { email, password } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // not include the full url the other part is defined in the proxy in package json
      const { data } = await axios.post('/api/signin', {
        email,
        password,
      });

      console.log(data);
    //   console.log(data.success === true);

      // clear form if user signed in successfully
      if (data.success === true) {
        setValues({ email: '', password: '' });
        toast.success('Sign In was Successful. Welcome to MOD^P');
        navigate('/user/dashboard')

if (typeof window !== 'undefined') {
    localStorage.setItem("token", JSON.stringify(data))
}


      }
    } catch (err) {
      console.log();
      toast.error(err.response.data.error);
    }
  };

  return (
    <>
      <StyledForm>
        <h2>Sign In</h2>
 

        <label htmlFor='formEmail'>Email</label>
        <input onChange={handleChange('email')} type='email' id='formEmail' value={email} placeholder='email' />

        <label htmlFor='formPassword'>Password</label>
        <input onChange={handleChange('password')} type='password' id='formPassword' value={password} placeholder='password' />

        <button onClick={onSubmitHandler} type='submit'>
         Login
        </button>
      </StyledForm>
    </>
  );
};

export default SignIn;


