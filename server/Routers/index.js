const express = require("express");
const router = express.Router();
const UserAPI = require('./Users');
const BookAPI = require('./Books');
const auth = require('./auth');


router.use('/users', UserAPI);
router.use('/books', BookAPI);

router.get("/auth", auth, (req, res) => {
  res.json({message: "You are authorized to access me" });
});

// router.get("/free-auth")


module.exports = router;