const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema(
  {
    title: { type: String },
    Author: { type: String },
    Genre: { type: String },
    read: { type: Boolean, default: false },
  }
);

module.exports = mongoose.model('Book', bookModel);
