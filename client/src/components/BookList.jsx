import React from 'react';

export const BookList = ({ books }) => {
  // console.log("books", books)
  return books.map((book, index) => {
    return (
      <>
        <li key={index}>{book.volumeInfo.title}</li>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
      </>
    );
  });
};
