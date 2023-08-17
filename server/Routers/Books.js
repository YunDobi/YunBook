const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

//api + req will be show results.
const API = process.env.API;

router.get('/', (req, res) => {
  console.log(req.body);
  request(process.env.API, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      res.send(body);
    }
  });
});

router.post('/', (req, res) => {
  const URL = API + req.body.query;
  console.log(URL);
  request(encodeURI(URL), (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      res.send(body);
    }
  });
});

module.exports = router;
