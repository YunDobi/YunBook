import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const BookList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("books", books)
  console.log(location.state);

  const books = location.state;

  return (
    <div className='ResultContainer' style={{ margin: '30px' }}>
      <h3>result</h3>
      <form method='get' style={{ margin: '20px' }}>
        <input type='text' name='inputBody' />
        <input type='submit' value='Search' />
      </form>
      {books.map((book, index) => {
        return (
          <div
            className='resultBody'
            style={{ border: '1px solid black', padding: '10px' }}
          >
            <div>
              {/* title */}
              <h3>{book.volumeInfo.title}</h3>

              <div style={{ display: 'flex' }}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />

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
    </div>
  );
};
