const config = require('../../config/config');
const jwt = require('jsonwebtoken');
// const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    }
});

  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product; 
