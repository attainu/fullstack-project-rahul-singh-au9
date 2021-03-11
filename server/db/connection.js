// SETTING THE CONNECTION TO MONGODB
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();



// CONNECTING TO MONGO CLOUD
mongoose.connect(process.env.CONNECTION_URL,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => {
  console.log(`Server running on port: http://localhost:${process.env.PORT}`)
})
.catch((err) => {
  console.log(`${err} did not connect`)
});