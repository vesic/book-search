'use strict';
var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3333);

app.use(express.static('build'));

if (app.get('env') === 'development') app.use(require('cors')());

app.get('/', (req, res) => {
  res.send(path.join(__dirname, 'index.html'));
});

app.use((req, res) => {
  res.status(404).send('File not found!');
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});