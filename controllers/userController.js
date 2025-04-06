const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/usersModel');
var jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 14)
        const newUser = await User.create({
            name,
            email,
            password: passwordHash
        });

        res.status(200).send({
            success: true,
            message: "User created successfuly",
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            }
        })

    } catch (error) {
        console.log('Register Error', error)
        res.status(500).send({
            success: false,
            message: "User registration failed",
            error,
        })
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).send({
                success: false,
                message: "Invalid email or password"
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })
        res.status(200).send({
            success: true,
            message: "User logged in successfully",
            data: {
                name: user._id,
                email: user.email,
                token,
            }
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "User login failed",
            error
        })
    }
}


const userAuthentication = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        const queryId = { _id: verifyToken.id }
        const user = await User.findOne(queryId).lean();
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User Not found"
            })
        }
        // const { password, ...safeUser } = user
        res.status(200).send({
            success: true,
            message: "User data successfully",
            data: user.email
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "User Not found",
            error
        })
    }
}



module.exports = { registerUser, loginUser, userAuthentication };