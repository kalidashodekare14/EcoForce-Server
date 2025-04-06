const User = require('../models/usersModel')

const profileInfoUpdate = async (req, res) => {
    const profileInfo = req.body;
    const email = req.params.email;
    console.log('check data', profileInfo)
    // try {
    //     const profileUpdate = await User.findOneAndUpdate(
    //         { email: email },
    //         { $set: profileInfo },
    //         { new: true }
    //     )
    //     res.status(200).send({
    //         success: true,
    //         message: "Profile information successfully",
    //         data: profileUpdate
    //     })
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).send({
    //         success: true,
    //         message: "Profile information successfully",
    //         error
    //     })
    // }
}

module.exports = { profileInfoUpdate }