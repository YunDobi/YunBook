import React, { useState } from 'react';
import Logo from '../imges/logo-no.png';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import {Login as LoginCall} from '../services/auth.service';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {state} = useLocation();

  console.log(state)
  const submitLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);
      console.log("loading")

      LoginCall(email, password)
      .then((data) => {
        setLoading(false);
        console.log('loading done', data);
        // alert(data.data.message, 'moving to the home!');
        navigate('/');
        window.location.reload()
      })
      // const data = await requestion;
    } catch (error) {
      console.error(error);
      // alert(error.response.data.message);
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
        <input type='email' name='email' />
        <input type='password' name='password' />
        <br />
        <input type='submit' value='Login' />
      </form>

      {state !== null ? <p style={{color: "red"}}>{state.message}</p> : null}

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
