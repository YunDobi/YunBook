import React, { useEffect, useState } from 'react';
import backgroundImage from '../imges/background.svg';
import axios from 'axios';
import './Home.css';
import { BookList } from './BookList';

export const Home = () => {
  const [login, setLogin] = useState(false);
  const [inputBody, setInputBody] = useState('');
  const [books, setBooks] = useState([]);

  // const booksHandler = (books) => {
  //   console.log(books)
  //   for (let item of books) {
  //     console.log(item.volumeInfo)
  //   }
  // }

  //for checking the users
  // useEffect(() => {
  //   booksHandler(books)
  // }, [books])

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
          <BookList books={books} />
        </div>
      </div>
    </>
  );
};
