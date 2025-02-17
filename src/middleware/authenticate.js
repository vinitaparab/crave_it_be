
const { getUserIdFromToken } = require("../config/jwtProvider");
const userService = require("../services/user.service");

const authenticate = async (req, res, next) => {
  //Bearer token
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    // console.log(token)

    const userId = getUserIdFromToken(token);
    const user = await userService.findUserById(userId);
    

    req.user = user;
  } catch (error) {
    return res.send({ error: `${error.message + 1}` });
  }
  next();
};

module.exports = authenticate;
