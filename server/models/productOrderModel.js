const mongoose = require("mongoose");

// for getting the user name
const {ObjectId} = mongoose.Schema

// POST SCHEMA FOR VALIDATION
const productOrderSchema = mongoose.Schema({

    Product: {
      type: ObjectId,
      ref: "Product"
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
const ProductOrder = new mongoose.model("ProductOrder", productOrderSchema);

// export Order to other files
module.exports = ProductOrder;