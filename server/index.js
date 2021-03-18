const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/connection");
const dotenv = require("dotenv");
dotenv.config();


// Init app
const app = express();

app.use(express.json());
app.use(cors());


const ProductRoutes = require('./routes/ProductRoutes')
// HOMEPAGE
app.get("/", (req, res)=>{
  res.send("HOME")
})


app.use('/api',ProductRoutes)

// ROUTES THAT NOT BEEN DEFINED
app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.")
})

// CONNECTING TO THE SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server running on port: http://localhost:${process.env.PORT}`)
}
)