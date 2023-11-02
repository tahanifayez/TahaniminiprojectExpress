const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Book", BookSchema);
