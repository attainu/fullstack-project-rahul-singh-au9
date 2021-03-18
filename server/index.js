const express = require("express");
const cors = require("cors");
require("./db/connection");
const userRoutes = require("./routes/userRouter");
const stripeRoutes = require("./routes/stripeRouter");
const serviceRoutes = require("./routes/serviceRouter");
require("dotenv").config();
const morgan = require("morgan");

const PORT = 3001

// Init app
const app = express();

// middlewares

// to communicate between different origins
app.use(cors());

// for post requests
app.use(express.json());

// to get info when a route is being hit
app.use(morgan("dev"));

// HOMEPAGE
app.get("/", (req, res)=>{
  res.send("HOME")
})


// USER ROUTES
app.use("/user", userRoutes);

// STRIPE ROUTES
app.use("",stripeRoutes);

// SERVICE ROUTES
app.use("", serviceRoutes);

// ROUTES THAT NOT BEEN DEFINED
app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.")
})

// CONNECTING TO THE SERVER
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`)
}
)