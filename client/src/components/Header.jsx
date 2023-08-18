import React, { useEffect, useState } from 'react';
import Logo from '../imges/ybook-logo.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export const Header = ({ status, setStatus }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [setStatus]);

  const LoginHandler = () => {
    navigate('/login');
  };

  const logoHandler = () => {
    navigate('/');
  };

  const LogoutHandler = () => {
    localStorage.removeItem('user');
    window.location.reload()
    navigate("/")
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#528265',
        height: '100px',
        padding: '0 30px',
        position: 'relative',
      }}
    >
      <img
        src={Logo}
        alt='logo'
        style={{ width: '20vh', height: '100%' }}
        onClick={logoHandler}
      ></img>
      <div className='rightNavbar'>
        <div className='navSearch'><h4>Search</h4></div>
        {status ? (
          <div className='Logout' onClick={LogoutHandler}>
            <h4>Logout{' '}</h4>
          </div>
        ) : (
          <div className='Login' onClick={LoginHandler}>
            <h4>Login</h4>
          </div>
        )}
      </div>
    </div>
  );
};
