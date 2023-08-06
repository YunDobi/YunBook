const express = require('express');
const bcrypt = require('bcrypt');
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
  bcrypt
    .hash(req.body.password, 10)
    .then((hashPassowrd) => {
      const newUser = new CreatingUser({
        email: req.body.email,
        passowrd: hashPassowrd,
        name: 'temp',
      });

      newUser
        .save()
        .then((doc) => {
          res.status(201).send({ message: 'User Created Successfully', doc });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send({ message: 'failed in mongodb' });
        });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send({
        message: 'Password was not hashed successfully',
      });
    });
});

module.exports = router;
