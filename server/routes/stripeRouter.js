const express = require("express");
const createStripeAccount = require("../controllers/stripeController");
const auth = require("../middleware/auth");
const requireSignin = require("../middleware/requireSignin");

const stripeRouter = express.Router();

stripeRouter.post("/createStripeAccount", requireSignin, createStripeAccount);

module.exports = stripeRouter;