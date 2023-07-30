//change to the nod.js
// import express from 'express';
const express = require('express');
const APIRouter = require('./Routers/index');

const app = express();
const port = 4000;

app.use(express.urlencoded({extends: true}));
app.use(express.json());
app.use('/api', APIRouter);


app.get("/" ,(req,res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log('app is listening in', port);
});