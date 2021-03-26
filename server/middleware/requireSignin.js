const expressJwt = require("express-jwt");
const serviceModel = require("../models/serviceModel");


// req.user
const requireSignin = expressJwt({
  // secret , expiry Date
  secret: process.env.SECRET,
  algorithms: ["sha1", "RS256", "HS256"]
});

const serviceOwner = async (req, res, next) => {
  let service = await serviceModel.findById(req.params.serviceId).exec();
  let owner = service._id == req.user._id;
  if(!owner){
    return res.status(403).send("UnAuthorized")
  };
  next();
}

module.exports = { requireSignin, serviceOwner};