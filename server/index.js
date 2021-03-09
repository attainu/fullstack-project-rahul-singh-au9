const express = require("express");
const cors = require("cors");
require("./db/connection");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
dotenv.config();

// Init app
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// HOMEPAGE
app.get("/", (req, res)=>{
  res.send("HOME")
})


// USER ROUTES
app.use("/user", userRoutes)

// ROUTES THAT NOT BEEN DEFINED
app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.")
})

// CONNECTING TO THE SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server running on port: http://localhost:${process.env.PORT}`)
}
)