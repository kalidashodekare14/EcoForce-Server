const express = require('express')
const router = express.Router();
const { roleManagement } = require('../controllers/dashboardController')


router.get('/role', roleManagement)


module.exports = router