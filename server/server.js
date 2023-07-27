//change to the nod.js
// import express from 'express';
const express = require('express');

const app = express();
const port = 4000;
app.get("/" ,(req,res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log('app is listening in', port);
});