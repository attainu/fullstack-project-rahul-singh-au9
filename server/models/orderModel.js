const mongoose = require("mongoose");

// for getting the user name
const {ObjectId} = mongoose.Schema

// POST SCHEMA FOR VALIDATION
const orderSchema = mongoose.Schema({

  Service: {
    type: ObjectId,
    ref: "Service"
  },

  session: {},

  orderedBy: {
    type: ObjectId,
    ref: "User"
  },

  orderedAt: {
    type: Date,
    default: new Date()
  },

}, {timestamps: true});

// MODEL
// we will create a new collection
const Order = new mongoose.model("Order", orderSchema);

// export Order to other files
module.exports = Order;