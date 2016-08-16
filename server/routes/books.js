'use strict';
var express = require('express');
var router = express.Router();
var Book = require('../models/Book');
var faker = require('faker');
var _ = require('lodash');
var async = require('async');

router.get('/', (req, res) => {
  Book.find({}, (err, data) => {
    res.send(data);
  })
});

// seed books
router.get('/seed', (req, res) => {
  let books = [];

  _.times(20, (index) => {
    books.push(
      new Book({
        title: faker.system.fileName(),
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        details: faker.lorem.paragraph(),
        path: `image${index}.jpg`
      })
    )
  });

  async.series([
    (cb) => {
      Book.remove({}, () => {});
      cb(null);
    },
    (cb) => {
      Book.create(books, (err, books) => {
        if (err) res.send(err);
        res.status(201).send({ msg: `${books.length} books created` });
        cb(null);
      })
    }
  ]);

});

module.exports = router;