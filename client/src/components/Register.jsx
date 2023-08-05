import React, { useState } from 'react';
import Logo from '../imges/logo-no.png';
import axios from 'axios';

export const Register = () => {
  const [userInfo, setUserInfo] = useState({})
  const RegisterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const requestion = axios.post('/api/users/register', {email: email, password: password});
      const data = await requestion
      console.log("data", data)
      setUserInfo(data.data)
    } catch (error) {
      console.error(error)
    }
  };
  console.log(Object.keys(userInfo))
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
      <img src={Logo} alt='' style={{ width: '120px' }} />
      <p style={{ color: 'white' }}>Login or Register</p>

      <form action='submit' method='post' style={{display:'flex', flexDirection: 'column'}} onSubmit={RegisterSubmit}>
        <input type='text' name='email' />
        <input type='text' name='password' />
        <input type='submit' value='Register' />
      </form>
      {Object.keys(userInfo).length !== 0 ? (<p style={{ color: 'white' }}>Sucessfully registered!</p>) : (<p style={{ color: 'white' }}>not yet</p>)}
    </div>
  );
};
