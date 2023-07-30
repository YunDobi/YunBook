const express = require("express");
const request = require('request');

const router = express.Router();


router.get('/', (req,res) => {
  console.log("requesting",req.body);
  res.json({
    name: "users name",
    data: "temp"
  });
});

router.post('/', (req,res) => {
  console.log("posting", req.body);
  res.send("posting");
});

module.exports = router;