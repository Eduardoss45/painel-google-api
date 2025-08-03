const express = require('express');
const router = express.Router();
const { getEmails } = require('../controllers/emailController');

router.get('/emails', getEmails);

module.exports = router;
