import React, { useEffect, useState } from 'react';
import backgroundImage from '../imges/background.svg';
import axios from 'axios';
import './Home.css';
import { BookList } from './BookList';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logout } from '../services/auth.service';
import { SearchBar } from '../services/Helper';

export const Home = () => {
  const [login, setLogin] = useState(false);
  const [inputBody, setInputBody] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // for checking the users and if res return 401, then delete the users.
  useEffect(() => {
    // axios.defaults.headers.common['Authorization'] = `x_path ${localStorage.getItem('token')}`;
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(typeof user.token, user.token);
    if (user) {
      try {
        axios
          .get('/api/auth', {
            headers: { authorization: 'Bearer ' + user.token },
          })
          .then((status) => {
            console.log('axios work', status);
          })
          .catch((error) => {
            console.log('error in axios');
            if (error.response.status === 403) {
              console.log('axios error', error);
              Logout();
              window.location.reload();
              //or navigate to the login
            }
          });
        // setBooks(data.items);
      } catch (error) {
        console.log('error of axios request', error);
      }
    }
  }, []);

  return (
    <>
      <div className='bodyContent'>
        <div className='bodyTop'>
          <div className='bodySearch'>
            <h2>Search your book now!</h2>
            {/* <form method='get' onSubmit={ReqHandler} style={{ margin: '20px' }}>
              <input type='text' name='inputBody' onChange={handleChange} />
              <input type='submit' value='Search' />
            </form> */}
            <SearchBar inputbody={inputBody} callback={setInputBody} />
          </div>
        </div>
        <div>
          {login ? <p>{location.state.email}</p> : <p></p>}
          {/* <BookList books={books} /> */}
        </div>
      </div>
    </>
  );
};
