const express = require('express')
const router = express.Router();
const { roleManagement } = require('../controllers/dashboardController')
const { eventManagement, eventsManagementData } = require('../controllers/adminDashboard')

router.get('/role', roleManagement);

router.get('/events_management_data', eventsManagementData)
router.post('/events_management', eventManagement)


module.exports = router