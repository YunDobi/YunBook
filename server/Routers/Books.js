const bodyParser = require('body-parser');
const express = require("express");
const request = require('request');
const router = express.Router();

const API = 'https://www.googleapis.com/books/v1/volumes?q=';

router.get('/', (req,res) => {
  console.log(req.body);
  request(API , (error, response, body) => {
    res.send(body);
  });
});
router.post('/', (req,res) => {
  console.log(req.body, req.headers.body);
  request(API + req.body.query, (error, response, body) => {
    res.send(body);
  });
});

module.exports = router;