import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SearchBar = ({inputbody, callback}) => {
  const navigate = useNavigate()

  const handleChange = (event) => {
    callback({ value: event.target.value });
  };

  const ReqHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/books', { query: `${inputbody.value}`});
      const data = await res.data;
      console.log({ data });
      // setBooks(data.items);
      navigate('/search', { state:  {books: data.items, inputBody: inputbody}});
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <form method='get' onSubmit={ReqHandler} style={{ margin: '20px' }}>
    <input type='text' name='inputBody' onChange={handleChange} />
    <input type='submit' value='Search' />
  </form>
  )
}
