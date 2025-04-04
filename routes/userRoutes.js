const express = require('express');
const { registerUser, loginUser, userAuthentication } = require('../controllers/userController');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/authentication', userAuthentication);

module.exports = router;