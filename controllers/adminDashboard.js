const Events = require("../models/eventsModel")

const eventManagement = async (req, res) => {
    try {
        const eventData = req.body;
        const saveData = await Events.create(eventData)
        res.status(200).send({
            success: true,
            message: "Event save successfully",
            data: saveData
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Something went rong",
            error
        })

    }
}

const eventsManagementData = async (req, res) => {
    try {
        const eventsData = await Events.find({})
        if (!eventsData) {
            return res.status(404).send({
                success: false,
                message: "Events data not found"
            })
        }
        res.status(200).send({
            success: true,
            message: "Events data find successfully",
            data: eventsData
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Something went rong",
            error
        })
    }
}


module.exports = { eventManagement, eventsManagementData }