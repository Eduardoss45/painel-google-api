const express = require('express');
const { getLogin, getRedirect } = require('../controllers/authController');

const router = express.Router();

router.get('/login', getLogin);
router.get('/callback', getRedirect);

module.exports = router;