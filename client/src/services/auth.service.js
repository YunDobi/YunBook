import axios from 'axios';


const Register = (email, password) => {
  return axios.post('https://yun-book.onrender.com/api/users/register', {
    email: email,
    password: password,
  });
}

export const Login = (email, password) => {
  return axios.post('https://yun-book.onrender.com/api/users/login', {
    email: email,
    password: password,
  }).then((response) => {
    // console.log(response);
    localStorage.setItem(
      'user',
      JSON.stringify({ email: response.data.email, token: response.data.token })
    );
  })
};

export const Logout = () => {
  localStorage.removeItem('user');
}

const CurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}



// module.exports = {Register, Login, Logout, CurrentUser, authHeader }