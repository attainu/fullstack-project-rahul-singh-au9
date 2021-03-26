const jwt =  require("jsonwebtoken");

const SECRET = "this is the super secret for hashing the user password";

const auth = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {      
          decodedData = jwt.verify(token, SECRET);

          req.userId = decodedData?.id;
        } else {
          decodedData = jwt.decode(token);

          req.userId = decodedData?.sub;
                                // sub is simply google's name for a specific id that        differentiates every single google user
        }

        next();
  } catch (error) {
        console.log(error);
  }
};

module.exports = auth;