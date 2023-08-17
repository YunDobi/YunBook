import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SearchBar } from '../services/Helper';
import logo from '../imges/ybook-logo.png';
import axios from 'axios';
let page = 0;

export const BookList = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [inputBody, setInputBody] = useState(state.inputBody);
  const originalInput = state.inputBody;

  const books = state.books;

  // console.log(page);
  // console.log(inputBody, originalInput);
  if (inputBody.value !== originalInput.value) {
    page = 0;
  }

  const ShowMore = async () => {
    // console.log(inputBody, page);
    page++;

    try {
      // inputBody value is right
      const res = await axios.post('/api/books', {
        query: `${inputBody.value}/${page}`,
      });
      const data = await res.data;
      console.log(data);
      // if (data.error) {
      //   console.error(data.error)
      // }
      // setBooks(data.items);
      navigate('/search', {
        state: { books: data.items, inputBody: inputBody },
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  if (!books) {
    return <p>empty</p>;
  }

  return (
    <div className='ResultContainer' style={{ margin: '30px' }}>
      <h3>result</h3>
      {/* inputBody is right */}
      <SearchBar inputbody={inputBody} callback={setInputBody} />
      {books.map((book, index) => {
        return (
          <div
            className='resultBody'
            style={{
              border: '1px solid black',
              margin: '5px 0',
              padding: '10px',
            }}
          >
            <div>
              {/* title */}
              <h3>{book.volumeInfo.title}</h3>

              <div style={{ display: 'flex' }}>
                {book.volumeInfo.imageLinks ? (
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
                ) : (
                  <img
                    src={logo}
                    alt=''
                    style={{ width: '128px', height: '224px' }}
                  />
                )}

                <div className='cardContainer' style={{ margin: '20px' }}>
                  <div
                    className='AuthLink'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '867px',
                    }}
                  >
                    {/* author */}
                    <p key={index + ' authors'}>{book.volumeInfo.authors}</p>
                    {/* link */}
                    <a href={book.volumeInfo.canonicalVolumeLink}>
                      Link to Google
                    </a>
                  </div>

                  {/* description */}
                  {book.volumeInfo.description &&
                  book.volumeInfo.description.length > 1000 ? (
                    <p>{book.volumeInfo.description.slice(0, 500)}...</p>
                  ) : (
                    <div>{book.volumeInfo.description}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <button
        onClick={() => {
          ShowMore();
        }}
      >
        more
      </button>
    </div>
  );
};
