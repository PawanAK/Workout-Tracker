//login user
const loginUser = async (req, res) => {
    res.json({ mssg: 'Login successful' })
}




//signup user

const signupUser = async (req, res) => {
    res.json({ mssg: 'Signup successful' })
}


module.exports = {signupUser, loginUser}