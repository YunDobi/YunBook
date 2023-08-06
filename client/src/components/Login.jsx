import React from 'react';
import Logo from '../imges/logo-no.png';
import { useNavigate } from 'react-router-dom';
import './Home.css'

export const Login = () => {

  const navigate = useNavigate()


  return (
    <div   style={{
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
    }}>
      <form
        action='submit'
        method='post'
        style={{ display: 'flex', flexDirection: 'column' }}
        // onSubmit={RegisterSubmit}
      >
        <input type='text' name='email' />
        <input type='text' name='password' /><br/>
        <input type='submit' value='Login' />
        {/* <input type='button' value='Register' /> */}
      </form>
      <p style={{color: 'white'}}>If you are not resgister yet, <span style={{textDecoration: 'underline'}} onClick={() => {navigate('/register')}}>Sing up</span></p>
    </div>
  );
};
