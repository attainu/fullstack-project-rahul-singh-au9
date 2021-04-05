// const mongoose = require("mongoose");
import mongoose from 'mongoose'

// for getting the user name
const {ObjectId} = mongoose.Schema

// POST SCHEMA FOR VALIDATION
const serviceSchema = mongoose.Schema({

  title: {
    type: String,
    required: "Title is required",
    trim: true
  },

  content: {
    type: String,
    required: "discription is required",
    maxlength: 10000,
    trim: true
  },

  location: {
    type: String,
    required: "Location is required"
  },

  price: {
    type: Number,
    required: "price is required",
    trim: true
  },

  postedBy: {
    type: String,
  },

  createdBy: {
    type: String,
  },

  image: {
    type: String,
    contentType: String,
    data: Buffer,
  },

  from: {
    type: Date,
  },

  to: {
    type: Date,
  },

  total: {
    type: Number
  },

  createdAt: {
    type: Date,
    default: new Date()
  },

  option: {
    type: String
  }

}, {timestamps: true});

// MODEL
// we will create a new collection
const Service = new mongoose.model("Service", serviceSchema);

// export postService to other files
// module.exports = Service;

export default Service