const express = require('express');
const router = require('./routes/');
const app = express();
const mongoose = require('mongoose');

const DB_URL ='mongodb://localhost:27017/interlink-meetup';

mongoose.connect(DB_URL, { useNewUrlParser: true }, function (err) {
   if(err) {
       console.error('Mongo connection FAIL: ' + err);
   }  else {
       console.log('Mongo connection OK');
   }
});

app.use(express.json());
app.use(router);


module.exports = app;