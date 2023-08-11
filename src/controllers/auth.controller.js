const authService = require('../services/auth.service');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await authService.registerUser(username, email, password);
    console.log("in controller--register--newUser", newUser);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginUser(email, password);
    console.log("in controller--login--token", token)
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials', error });
  }
};

module.exports = {
    register,
    login
}