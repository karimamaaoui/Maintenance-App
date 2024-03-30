// middleware mt3 el suivi 

const jwt = require("jsonwebtoken");

const verifyRoles = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send("7ot token");
  }

  const token = authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).send("7ot token");
  }

  const decodedToken = jwt.decode(token);

  if (!decodedToken || decodedToken.UserInfo.role !== "ADMIN") {
    return res.status(403).json("orzen makech ADMIN");
  }

  next();
};

module.exports = verifyRoles;
