const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  price_id: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  rating: {
    rate: { type: Number },
    count: { type: Number },
  },
});

module.exports = mongoose.model('Product', productSchema);
