import React, { useEffect, useState } from 'react';
import Logo from '../imges/logo-no.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const RegisterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);
      const requestion = axios.post('https://yun-book.onrender.com/api/users/register', {
        email: email,
        password: password,
      });
      const data = await requestion;
      setLoading(false);
      // console.log("data", data.data.doc)
      alert(data.data.message);
      // setUserInfo(data.data)
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };
  // console.log(Object.keys(userInfo))
  return (
    <div className='loginBody'>
      <img src={Logo} alt='' style={{ width: '120px' }} />
      <p style={{ color: 'white' }}>Login or Register</p>

      <form
        action='submit'
        method='post'
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={RegisterSubmit}
      >
        <input type='text' name='email' />
        <input type='password' name='password' />
        <input type='submit' value='Register' />
      </form>
      <p style={{ color: 'white' }}>
        If you already registered,{' '}
        <span
          style={{ textDecoration: 'underline' }}
          onClick={() => {
            navigate('/login');
          }}
        >
          Sing in
        </span>
      </p>
    </div>
  );
};
