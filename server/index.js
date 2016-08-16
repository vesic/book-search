'use strict';
var express = require('express');
var app = express();
var path = require('path');

// mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://vesic:vesic@ds037155.mlab.com:37155/my');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo success')  
});

app.set('port', process.env.PORT || 3333);

app.use(express.static('build'));
app.use(express.static('img'));

app.use('/books', require('cors')(), require('./routes/books'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use((req, res) => {
  res.status(404).send('File not found!');
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});