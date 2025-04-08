const express = require('express');
const { profileInfoUpdate, profileData } = require('../controllers/userProfileController');
const router = express.Router();

router.get('/profile_data/:email', profileData)
router.patch('/profile_info/:email', profileInfoUpdate);


module.exports = router