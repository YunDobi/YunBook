const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CreatingUser = require('../Model/Users');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('requesting', req.body);
  res.json({
    name: 'users name',
    data: 'temp',
  });
});

router.post('/login', (req, res) => {
  //searching from the db
  CreatingUser.findOne({ email: req.body.email })
    .then((doc) => {
      console.log(doc.password, req.body.password);
      bcrypt
        .compare(req.body.password, doc.password)
        .then((passowrdCheck) => {
          if (passowrdCheck === false) {
            return res.status(404).send({ message: 'Password is not matched' });
          }

          //giving the token
          const token = jwt.sign(
            {
              userId: doc._id,
              userEmail: doc.email,
            },
            'Random Key',
            {
              expiresIn: '2m',
            }
          );

          res
            .status(200)
            .send({ message: 'login sucess', email: doc.email, token });
        })
        .catch((error) => {
          // console.log(error);
          res.status(400).send({ message: 'Password is wrong', error });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({ message: 'Email is wrong' });
    });
});

router.post('/register', (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashPassword) => {
      const newUser = new CreatingUser({
        email: req.body.email,
        password: hashPassword,
        name: 'temp',
      });

      newUser
        .save()
        .then((doc) => {
          res.status(201).send({ message: 'User Created Successfully', doc });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send({ message: 'The email is already in the db' });
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
