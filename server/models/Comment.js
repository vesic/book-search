var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  title:  String,
  body: String,
  bookId: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);