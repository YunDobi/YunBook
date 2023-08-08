import React, { useEffect, useState } from 'react';
import Logo from '../imges/ybook-logo.png';
import './Home.css'
import { useLocation, useNavigate } from 'react-router-dom';


export const Header = () => {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  const location = useLocation

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLogin(true)
    }
  }, [])

  const LoginHandler = () => {
    navigate('/login')
  }

  const logoHandler = () => {
    navigate('/')
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
        <div className='navSearch'>search</div>
        {login ? (
          <div className='Login' onClick={LoginHandler}>Logout </div>
        ): (
          <div className='Login' onClick={LoginHandler}>Login</div>
        )}
      </div>
    </div>
  );
};
