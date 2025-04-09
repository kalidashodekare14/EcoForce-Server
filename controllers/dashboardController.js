const User = require("../models/usersModel")
var jwt = require('jsonwebtoken');

const roleManagement = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log('chcking token', token)
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        const queryId = { _id: verifyToken.id }

        const userRole = await User.findOne(queryId)
        if (!userRole) {
            return res.status(404).send({
                success: false,
                message: "The user's role cannot be detected.",
            })
        }
        const isRole = userRole?.role
        if (!isRole) {
            return res.status(404).send({
                success: false,
                message: "User role not found.",
            })
        }
        console.log('checking user role', isRole)
        res.status(200).send({
            success: true,
            message: "User role detection successful.",
            data: isRole
        })

    } catch (error) {
        console.log(error)
        res.status(200).send({
            success: false,
            message: "Something went wrong.",
            error
        })
    }
}

module.exports = { roleManagement }