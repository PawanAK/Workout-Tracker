const User = require('../models/userModel')

// login a user
const loginUser = async (req, res) => {
    res.json({ mssg: 'login user' })
}

// signup a user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)

        res.status(201).json({ email, user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { signupUser, loginUser }