const express = require('express');
const router = express.Router();
const { profileInfoUpdate } = require('../controllers/userProfileController');


router.patch('/profile-info/:email', profileInfoUpdate);


module.exports = router