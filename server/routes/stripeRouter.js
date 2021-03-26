const express = require("express");
const {createStripeAccount, getAccountStatus, getAccountBalance, payoutSetting, stripeSessionId, stripeSuccess} = require("../controllers/stripeController");
const {requireSignin} = require("../middleware/requireSignin");

const stripeRouter = express.Router();

stripeRouter.post("/createStripeAccount", requireSignin, createStripeAccount);
stripeRouter.post("/get-account-status", requireSignin, getAccountStatus);
stripeRouter.post("/get-account-balance", requireSignin, getAccountBalance);
stripeRouter.post("/payout-setting", requireSignin, payoutSetting);
stripeRouter.post("/stripe-session-id", requireSignin, stripeSessionId);
stripeRouter.post("/stripe-success", requireSignin, stripeSuccess);


module.exports = stripeRouter;