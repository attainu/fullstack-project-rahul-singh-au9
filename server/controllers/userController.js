const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv").config();

const SECRET = "this is the super secret for hashing the user password";

const signup = async (req, res) => {

  const {firstName, lastName, city, phone, email, password } = req.body;

  if(!firstName || !lastName || !city || !phone || !email || !password){
      return res.status(400).send("All field are required!")
  }

  try{

    const oldUser = await userModel.findOne({email});

    if(oldUser) {
      return res.status(400).send("User already Exists!")
    };

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userModel.create({
      name: `${firstName} ${lastName}`,
      email,
      city,
      phone,
      password: hashedPassword,

    });

    const token = jwt.sign({email: result.email, id: result._id}, SECRET, {expiresIn: "1h"});

    res.status(201).json({
      result:{
        _id: result._id,
        name: result.name,
        phone: result.phone,
        email: result.email,
        city: result.city,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
        // stripe_account_id: oldUser.stripe_account_id,
        // stripe_seller: oldUser.stripe_seller,
        // stripeSession: oldUser.stripeSession
    }, token});

  }catch(err){

    res.status(500).send("Something went wrong!");

    console.log(err);
  }
};


const signin = async (req, res) => {

  const {email, password } = req.body;

  if(!email) return res.status(404).send("Email is required")
  if(!password) return res.status(404).send("Password is required")


  try {

    const oldUser = await userModel.findOne({ email });

    if(!oldUser){
      return res.status(404).send("User doesn't exist")
    };

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if(!isPasswordCorrect){
      return res.status(400).send("Invalid Credentials")
    };

    const token = jwt.sign({
      email: oldUser.email,
      id: oldUser._id
    }, SECRET, {expiresIn: "1h"});

    res.status(200).json({
      result: {
        _id: oldUser._id,
        name: oldUser.name,
        phone: oldUser.phone,
        email: oldUser.email,
        city: oldUser.city,
        createdAt: oldUser.createdAt,
        updatedAt: oldUser.updatedAt,
        stripe_account_id: oldUser.stripe_account_id,
        stripe_seller: oldUser.stripe_seller,
        stripeSession: oldUser.stripeSession
    }, token})
    
  } catch (error) {

    res.status(500).send("Something went wrong!");
    
  }

}

module.exports = {signup, signin};