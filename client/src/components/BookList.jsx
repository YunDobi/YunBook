import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SearchBar } from '../services/Helper';
import logo from '../imges/ybook-logo.png';
import axios from 'axios';
// import axios from 'axios';

export const BookList = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [inputBody, setInputBody] = useState(state.inputBody || null);

  const books = state.books;

  useEffect(() => {
    // axios.defaults.headers.common['Authorization'] = `x_path ${localStorage.getItem('token')}`;
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(typeof user.token, user.token);
    if (user) {
      try {
        axios
          .get('https://yun-book.onrender.com/api/auth', {
            headers: { authorization: 'Bearer ' + user.token },
          })
          .then((status) => {
            console.log('axios work', status);
          })
          .catch((error) => {
            if (error.response.status === 403) {
              console.log('Not Authirized yet!', error);
              window.localStorage.removeItem('user');
              navigate('/login', {
                state: { message: 'Your token is expired' },
              });
              window.location.reload();
            }
          });
        // setBooks(data.items);
      } catch (error) {
        console.log('error of axios request', error);
      }
    } else {
      navigate('/login', { state: { message: 'not login yet' } });
      // alert("not login Yet!")
    }
  }, []);

  if (!books) {
    return <p>empty</p>;
  }

  return (
    <div className='ResultContainer' style={{ margin: '30px' }}>
      <h3>result</h3>
      {/* inputBody is right */}
      <SearchBar searchQuery={inputBody} callback={setInputBody} />
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

                <div
                  className='cardContainer'
                  style={{ margin: '20px', overflow: 'hidden' }}
                >
                  <div
                    className='AuthLink'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '50vh',
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
      {/* <button
        onClick={() => {
          ShowMore();
        }}
      >
        more
      </button> */}
    </div>
  );
};
