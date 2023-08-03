const express = require("express");
const router = express.Router();
const UserAPI = require('./Users');
const BookAPI = require('./Books');


router.use('/user', UserAPI);
router.use('/books', BookAPI);


module.exports = router;