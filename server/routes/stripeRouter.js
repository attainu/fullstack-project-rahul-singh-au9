const express = require("express");
const {createStripeAccount, getAccountStatus} = require("../controllers/stripeController");
const auth = require("../middleware/auth");
const requireSignin = require("../middleware/requireSignin");

const stripeRouter = express.Router();

stripeRouter.post("/createStripeAccount", requireSignin, createStripeAccount);
stripeRouter.post("/get-account-status", requireSignin, getAccountStatus);

module.exports = stripeRouter;