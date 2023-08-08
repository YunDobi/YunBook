import React, { useState } from 'react';
import Logo from '../imges/logo-no.png';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import axios from 'axios';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);
      const requestion = axios.post('/api/users/login', {
        email: email,
        password: password,
      });
      const data = await requestion;
      setLoading(false);
      console.log('data', data.data);
      //local storage insert
      localStorage.setItem(
        'user',
        JSON.stringify({ email: data.data.email, token: data.data.token })
      );
      alert(data.data.message, 'moving to the home!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className='loginBody'>
      <img src={Logo} alt='' style={{ width: '120px' }} />
      <p style={{ color: 'white' }}>Login</p>
      <form
        action='submit'
        method='post'
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={submitLogin}
      >
        <input type='text' name='email' />
        <input type='text' name='password' />
        <br />
        <input type='submit' value='Login' />
      </form>

      <p style={{ color: 'white' }}>
        If you are not resgister yet,{' '}
        <span
          style={{ textDecoration: 'underline' }}
          onClick={() => {
            navigate('/register');
          }}
        >
          Sing up
        </span>
      </p>
    </div>
  );
};
