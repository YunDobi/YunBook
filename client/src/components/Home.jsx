import React, { useEffect, useState } from 'react';
import backgroundImage from '../imges/background.svg';
import axios from 'axios';
import './Home.css';
import { BookList } from './BookList';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [login, setLogin] = useState(false);
  const [inputBody, setInputBody] = useState('');
  const [books, setBooks] = useState([]);
  const location = useLocation();

  // const booksHandler = (books) => {
  //   console.log(books)
  //   for (let item of books) {
  //     console.log(item.volumeInfo)
  //   }
  // }

  // for checking the users
  useEffect(() => {
    // axios.defaults.headers.common['Authorization'] = `x_path ${localStorage.getItem('token')}`;
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(typeof user.token, user.token);
    try {
      axios
        .get('/api/auth', { headers: { authorization: "Bearer " + user.token } })
        .then((user) => {
          console.log(user);
        });
      // setBooks(data.items);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const handleChange = (event) => {
    setInputBody({ value: event.target.value });
  };

  const ReqHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/books', { query: inputBody.value });
      const data = await res.data;
      console.log({ data });
      setBooks(data.items);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <div className='bodyContent'>
        <div className='bodyTop'>
          <div className='bodySearch'>
            <h2>Search your book now!</h2>
            <form method='get' onSubmit={ReqHandler} style={{ margin: '20px' }}>
              <input type='text' name='inputBody' onChange={handleChange} />
              <input type='submit' value='Search' />
            </form>
          </div>
        </div>
        <div>
          {login ? <p>{location.state.email}</p> : <p></p>}
          <BookList books={books} />
        </div>
      </div>
    </>
  );
};
