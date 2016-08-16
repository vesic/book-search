'use strict';
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3333);

if (app.get('env') === 'development') app.use(require('cors')());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res) => {
  res.status(404).send('File not found!');
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});