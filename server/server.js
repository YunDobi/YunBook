//change to the nod.js
// import express from 'express';
const express = require('express');
const APIRouter = require('./Routers/index');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const CreatingUser = require('./Model/Users');

const app = express();
const port = 4000;
dotenv.config();

const dbConnect = async () => {
  mongoose
    .connect(process.env.DB_URL, { useNewUrlParser: false })
    .then(() => {
      console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
      console.log('Alert!');
      console.error(error);
    });
};

dbConnect();

app.use(express.urlencoded({ extends: true }));
app.use(express.json());
app.use('/api', APIRouter);

app.get('/', (req, res) => {
  //---------creating the new user-------------
  // let userInfo = new CreatingUser({
  //   email: 'testing@gmail.com',
  //   passowrd: '1234',
  //   name: 'test',
  // });
  // userInfo
  //   .save()
  //   .then((doc) => {
  //     console.log(doc);
  //     res.send('hello');
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  //--------------finding information from the query-------------
  // CreatingUser.find({
  //   email: 'lyc1353@gmail.com'
  // }).then((doc) => {
  //   console.log(doc);
  // });
  // --------------find one and update ----------
  // CreatingUser.findOneAndUpdate(
  //   {
  //     email: 'testing23@teset.com',
  //   },
  //   {
  //     email: 'testing1@teset.com',
  //   },
  //   { new: true, runValidators: true }
  // ).then((doc) => {
  //   console.log(doc);
  //   res.send(doc);
  // });
  //-----------find one and remove--------------
  // CreatingUser.findOneAndRemove({
  //   email: 'testing1@teset.com'
  // }).then((doc) => {
  //   console.log(doc);
  // }).catch((error) => {
  //   console.error(error);
  // });
  //------------get all users -----------
  // CreatingUser.find().then((doc) => {
  //   console.log(doc)
  // })
});

app.listen(port, () => {
  console.log('app is listening in', port);
});