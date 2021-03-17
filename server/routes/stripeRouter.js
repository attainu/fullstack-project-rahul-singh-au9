const express = require("express");
const {createStripeAccount, getAccountStatus, getAccountBalance} = require("../controllers/stripeController");
const auth = require("../middleware/auth");
const requireSignin = require("../middleware/requireSignin");

const stripeRouter = express.Router();

stripeRouter.post("/createStripeAccount", requireSignin, createStripeAccount);
stripeRouter.post("/get-account-status", requireSignin, getAccountStatus);
stripeRouter.post("/get-account-balance", requireSignin, getAccountBalance);


module.exports = stripeRouter;