const expressJwt = require("express-jwt");

// req.user
const requireSignin = expressJwt({
  // secret , expiry Date
  secret: process.env.SECRET,
  algorithms: ["sha1", "RS256", "HS256"]
});

module.exports = requireSignin;