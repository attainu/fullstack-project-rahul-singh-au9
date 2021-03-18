const express = require("express");
const {createService } = require("../controllers/serviceController");
// const auth = require("../middleware/auth");
const requireSignin = require("../middleware/requireSignin");

const serviceRouter = express.Router();

serviceRouter.post("/create-service", requireSignin, createService);



module.exports = serviceRouter;

// npm express formidabble