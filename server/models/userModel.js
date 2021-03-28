const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },

    email: {
    type: String,
    required: true,
    unique: [true,"Email is already registered"],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Please enter a valid Email !")
      }
    }
  },

  phone: {
    type: Number,
    required: true,
    unique: [true,"Email is already registered"]
  },

  city: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    trim: true
  },

  id:{
    type: String,
  },

  stripe_account_id : "",
  stripe_seller: {},
  stripeSession: {},

},{timestamps: true}
);

// MODEL
// we will create a new collection
const User = new mongoose.model("User", userSchema);

// export User to other files
module.exports = User;