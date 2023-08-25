const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("student-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No Token, Not authorized" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecretToken"));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
