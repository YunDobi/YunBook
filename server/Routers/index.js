const express = require("express");
const router = express.Router();
const UserAPI = require('./Users');
const BookAPI = require('./Books');


router.use('/user', UserAPI);
router.use('/books', BookAPI);

// router.get('/user', (req,res) => {
//   console.log("requesting",req.body);
//   res.json({
//     name: "users name",
//     data: "temp"
//   });
// });

// router.post('/user', (req,res) => {
//   console.log("posting", req.body);
//   res.send("posting");
// });

// router.get('/books', (req,res) => {
//   request('https://www.googleapis.com/books/v1/volumes?q=cat:keyes&key=AIzaSyBgmaL22-4h_oM4wPHKaIs4lawmtbl8nzI', (error, response, body) => {
//     res.json(body);
//   });
// });

module.exports = router;