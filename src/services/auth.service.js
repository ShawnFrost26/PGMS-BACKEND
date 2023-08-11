const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("in service--register--hashedPassword", hashedPassword);
  const newUser = new User({ username, email, password: hashedPassword });
  console.log("in service--register--newUser", newUser);
  return newUser.save();
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
  return token;
};

module.exports = {
    registerUser,
    loginUser
}