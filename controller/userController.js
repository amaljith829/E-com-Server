const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createUser(req, res) {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username: username,
            email: email,
            password: hashedPassword
        });
        await user.save();
        res.send('User created successfully');
    } catch (error) {
        res.send(error.message);
    }
}

async function getUser(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ email: email });
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = jwt.sign({
                    userId: user._id,
                    email: user.email
                }, process.env.SECRET_KEY, { expiresIn: '1h' });
                res.json({ token: token });

     
            } else {
                res.status(401).send('Invalid password');
            }
        }
        else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }


}
async function home(req, res) {
    res.send('Welcome to the home page');
}




module.exports = { createUser, getUser, home };