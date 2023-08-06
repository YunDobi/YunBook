import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BookList = ({ books }) => {
  const navigate = useNavigate();
  // console.log("books", books)
  return books.map((book, index) => {
    return (
      <>
        {/* <li key={index}> */}
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <div style={{ display: 'flex' }}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
            <div>
              <p key={index + ' authors'}>{book.volumeInfo.authors}</p>
              <p>{book.volumeInfo.description}</p>
            </div>
            <a href={book.volumeInfo.canonicalVolumeLink}>Link to Google</a>
            {/* <button
              type='button'
              onClick={() => {
                navigate(book.volumeInfo.canonicalVolumeLink);
              }}
            >
              Link to Goolge link
            </button> */}
          </div>
        </div>
        {/* </li> */}
      </>
    );
  });
};
