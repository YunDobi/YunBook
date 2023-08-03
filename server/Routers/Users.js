const express = require('express');
const CreatingUser = require('../Model/Users');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('requesting', req.body);
  res.json({
    name: 'users name',
    data: 'temp',
  });
});

router.post('/register', (req, res) => {
  console.log('posting', req.body);
  let newUser = new CreatingUser({
    email: req.body.email,
    passowrd: req.body.passowrd,
    name: 'temp',
  });

  newUser
    .save()
    .then((doc) => {
      res.send('sucessfully created new user!', doc);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });

  res.send('posting');
});

module.exports = router;
