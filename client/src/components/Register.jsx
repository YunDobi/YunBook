import React, { useState } from 'react';
import Logo from '../imges/logoB.png';
import axios from 'axios';

export const Register = () => {
  const [inputBody, setInputBody] = useState({})
  const RegisterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const requestion = axios.post('/api/users/register', {email: email, password: password});
      const data = await requestion
      console.log(data.data)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div
      style={{
        border: '1px solid black',
        height: '600px',
        width: '400px',
        margin: 'auto',
        marginTop: '30px',
        backgroundColor: 'black',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <img src={Logo} alt='' style={{ width: '100px' }} />
      <p style={{ color: 'white' }}>Login or Register</p>

      <form action='submit' method='post' style={{display:'flex', flexDirection: 'column'}} onSubmit={RegisterSubmit}>
        <input type='text' name='email' />
        <input type='text' name='password' />
        <input type='submit' value='Register' />
      </form>
    </div>
  );
};
