const express = require('express');
const { 
    createInterviewController,
    fetchAllInterviewsController,
    fetchInterviewByIdController,
    updateInterviewController,
    deleteInterviewController 
} = require('../controllers/interview.controller');

const router = express.Router();

router.post('/', createInterviewController);
router.get('/', fetchAllInterviewsController);
router.get('/:interviewId', fetchInterviewByIdController);
router.put('/:interviewId', updateInterviewController);
router.delete('/:interviewId', deleteInterviewController);

module.eports = router;