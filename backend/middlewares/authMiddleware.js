const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    
  try {
    // console.log("reach auth");
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token)
    const decoded = jwt.verify(token,process.env.JWTPRIVATEKEY);
    // console.log(decoded)
    req.body.userId = decoded._id;
    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "Invalid token" });
  }
};