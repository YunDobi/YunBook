const express = require('express');
const APIRouter = require('./Routers/index');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();
const port = process.env.PORT;
//giving the options for the cors and middleware for receiving the header only given type
const corsOptions = {
  origin: "*"
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const dbConnect = async() => { // connect to the db with mongoose which is node js express mongodb connector
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
      console.log('Alert!');
      console.error(error);
    });
};

dbConnect();

app.use(cors(corsOptions));
app.use(cors({
  origin: "*",
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
}));
app.use(express.urlencoded({ extends: true, withCredentials: true }));
app.use(express.json());
app.use('/api', APIRouter);

app.get('/', (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log('app is listening in', port);
});
