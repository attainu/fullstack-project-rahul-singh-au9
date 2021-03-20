const express = require("express");
const {createStripeAccount, getAccountStatus, getAccountBalance, payoutSetting} = require("../controllers/stripeController");
const auth = require("../middleware/auth");
const {requireSignin} = require("../middleware/requireSignin");

const stripeRouter = express.Router();

stripeRouter.post("/createStripeAccount", requireSignin, createStripeAccount);
stripeRouter.post("/get-account-status", requireSignin, getAccountStatus);
stripeRouter.post("/get-account-balance", requireSignin, getAccountBalance);
stripeRouter.post("/payout-setting", requireSignin, payoutSetting);


module.exports = stripeRouter;