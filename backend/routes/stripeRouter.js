// const express = require("express");
// const {createStripeAccount, getAccountStatus, getAccountBalance, payoutSetting, stripeSessionId, stripeSuccess} = require("../controllers/stripeController.js");
// const {requireSignin} = require("../middleware/requireSignin.js");

import express from 'express'
import { createStripeAccount, getAccountBalance, getAccountStatus, payoutSetting, stripeSessionId, stripeSuccess } from '../controllers/stripeController.js'
// import { requireSignin } from '../middleware/requireSignin.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const stripeRouter = express.Router();

stripeRouter.post("/createStripeAccount", protect, createStripeAccount);
stripeRouter.post("/get-account-status", protect, getAccountStatus);
stripeRouter.post("/get-account-balance", protect, getAccountBalance);
stripeRouter.post("/payout-setting", protect, payoutSetting);
stripeRouter.post("/stripe-session-id", protect, stripeSessionId);
stripeRouter.post("/stripe-success", protect, stripeSuccess);


export default stripeRouter;