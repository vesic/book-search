var mongoose = require('mongoose');
var Comment = require('./Comment');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title:  String,
  author: String,
  details: String,
  category: String,
  path: String,
  comments: [ Comment ],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', bookSchema);