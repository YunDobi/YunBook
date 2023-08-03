import React, { useState } from 'react';
import backgroundImage from '../imges/background.svg';
import axios from 'axios';
import './Home.css';

export const Home = () => {
  const [inputBody, setInputBody] = useState('');

  const handleChange = (event) => {
    setInputBody({ value: event.target.value });
  };

  const ReqHandler = async (e) => {
    e.preventDefault();

    //this is the req.body
    // console.log(inputBody.value)

    try {
      const res = await axios.post('/api/books', { query: inputBody.value });
      const data = await res.data;
      console.log({ data });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <div className='bodyContent'>
        <div className='bodySearch'>
          <h2>Search your book now!</h2>
          <form method='get' onSubmit={ReqHandler} style={{margin:"20px"}}>
            <input type='text' name='inputBody' onChange={handleChange} />
            <input type='submit' value='Search' />
          </form>
        </div>
        <img
          src={backgroundImage}
          alt='background'
          style={{ width: '100%' }}
        ></img>
      </div>
    </>
  );
};
