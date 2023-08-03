const bodyParser = require('body-parser');
const express = require("express");
const request = require('request');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

//api + req will be show results.
const API = process.env.API;

router.get('/', (req,res) => {
  console.log(req.body);
  request(process.env.API , (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      res.send(body);
    }
  });
});


router.post('/', (req,res) => {
  console.log(API + req.body.query);
  request(API + req.body.query, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      res.send(body);
    }
  });
});

module.exports = router;