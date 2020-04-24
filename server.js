const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const message = require('./models/message')
const messageRoute = require('./routes/messageRoutes');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(messageRoute);
app.get('/message', (req, res, next) => {
    message.find()
    .then(result => {
        res.status(200).send({message: result});
    })
    .catch(e => console.log(e));
})

const DB_URI = 'mongodb+srv://bachhongthai:hongthai9@cluster0-qx7x3.mongodb.net/contact?retryWrites=true&w=majority';

mongoose
.connect(DB_URI)
.then(() => {
  app.listen(PORT);
})
.catch(e => {
      console.log(e);
})//aloalo ??
//vaof folder kia cho tao
// viet cau lenh duoi comment line