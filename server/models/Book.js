var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title:  String,
  author: String,
  details: String,
  path: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', bookSchema);