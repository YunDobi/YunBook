const axios = require("axios")


const Register = (email, password) => {
  return axios.post('/api/users/register', {
    email: email,
    password: password,
  });
}

const Login = (email, password) => {
  return axios.post('/api/users/login', {
    email: email,
    password: password,
  });
}

module.exports = {Register, Login}