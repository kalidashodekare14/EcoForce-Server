const User = require('../models/usersModel')

const profileData = async (req, res) => {
    const email = req.params.email
    try {
        const userData = await User.findOne({ email: email })
        res.status(200).send({
            success: true,
            message: "User data successfully",
            data: userData
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "User not found",
            error
        })
    }
}

const profileInfoUpdate = async (req, res) => {
    const profileInfo = req.body;
    const email = req.params.email;
    try {
        const profileUpdate = await User.findOneAndUpdate(
            { email: email },
            { $set: profileInfo },
            { new: true }
        )
        const { password, ...safeData } = profileUpdate.toObject()
        console.log('check profile data', safeData)
        res.status(200).send({
            success: true,
            message: "Profile information successfully",
            data: safeData
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Profile information successfully",
            error
        })
    }
}

module.exports = { profileInfoUpdate, profileData }