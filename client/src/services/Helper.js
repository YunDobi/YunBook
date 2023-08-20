import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SearchBar = ({searchQuery, callback}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    callback({ value: event.target.value });
  };

  const ReqHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("loading")

    try {
      const res = await axios.post('https://yun-book.onrender.com/api/books', { 
          query: `${searchQuery.value}`
        });
      const data = await res.data;
      setLoading(false)
      console.log({ data }, "and loading is done`");
      
      navigate('/search', { state:  {books: data.items, searchQuery: searchQuery}});
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <form method='get' onSubmit={ReqHandler} style={{ margin: '20px' }}>
    <input type='text' name='searchQuery' onChange={handleChange} />
    <input type='submit' value='Search' />
  </form>
  )
}
