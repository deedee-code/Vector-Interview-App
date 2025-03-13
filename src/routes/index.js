const express = require('express');

const authRoute = require('./auth.route');
const interviewRoute = require('./interview.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/interview', interviewRoute)

module.exports = router;