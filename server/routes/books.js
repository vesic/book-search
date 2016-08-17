'use strict';
var express = require('express');
var router = express.Router();
var Book = require('../models/Book');
var Comment = require('../models/Comment');
var faker = require('faker');
var _ = require('lodash');
var async = require('async');
var multer  = require('multer')
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join('public', 'img'));
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

var upload = multer({ storage: storage })

// get all
router.get('/', (req, res) => {
  Book.find({}, (err, data) => {
    res.send(data);
  })
});

// get comments
router.get('/comments', (req, res) => {
  Comment.find({}, (err, data) => res.send(data));
});

// get single
router.get('/:id', (req, res) => {
  if (!req.params.id) res.status(400).send({ msg: 'Id not provided' });

  Book.findById(req.params.id, (err, data) => {
    res.send(data);
  })
});

// get categories
router.get('/categories', (req, res) => {
  Book.find({}, 'category', (err, data) => {
    let categories = _.uniqBy(data, 'category');
    categories = _.map(categories, single => { return { category: single.category }});
    res.send(categories);
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
        category: faker.random.arrayElement(['Javascript', 'Express', 'Mongo', 'React', 'Angular']),
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

// seed comments
router.get('/comments/seed', (req, res) => {
  
  let comments = [];
  _.times(10, (index) => {
    comments.push(
      new Comment({
        title: faker.random.word(),
        body: faker.random.words(5),
        bookId: "57b3fd0c62f6dd001361212e"
      })
    )
  })

  Comment.remove({}, () => {
    Comment.create(comments, (err, data) => {
      res.send(`${data.length} comments created!`);
    })
  });

});

// post comments
router.post('/comments', (req, res) => {
  console.log(req.body)
  new Comment(req.body).save((err, data) => {
    res.status(201).send('Comment created!');
  })
});

// upload book
router.post('/new', upload.single('file'), (req, res) => {
  new Book({
    title: req.body.title,
    author: req.body.author,
    details: req.body.details,
    category: req.body.category,
    path: req.file.filename,
  }).save((err, data) => {
    res.status(201).send('Ok');
  });
});

module.exports = router;