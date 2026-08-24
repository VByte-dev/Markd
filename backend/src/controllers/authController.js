const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  const data = req.body;

  let hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  await User.create(data);

  res.status(201);
  res.json({
    message: "User registered successfully",
    status: res.statusCode,
  });
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      status: res.statusCode,
      message: "Login successfull",
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getCurrentUser = async (req, res) => {
  console.log(req.user); 
  let me = await User.findById(req.user.userId);
  res.json({
    message: "Get Done",
    status: res.statusCode,
    data: me
  })
}

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser
};
