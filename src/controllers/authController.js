const { ReturnDocument } = require("mongodb");
const { generateToken } = require("../config/jwtProvider");
const userService = require("../services/user.service");
const { models } = require("mongoose");
const bcrypt = require("bcrypt");


const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = generateToken(user._id);
    console.log(jwt)

    //await cartService.createCart(User);
    return res.status(201).send({ jwt, message: "register success",user })
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    console.log("check1");
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password!" });
    }
    const jwt = generateToken(user._id);
    return res.status(200).send({ jwt, mesaage: "Login success",isPasswordValid });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
module.exports = {
  register,
  login,
};
