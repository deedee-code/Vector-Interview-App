const { createInterviewService, fetchAllInterviewsService, fetchInterviewByIdService, updateInterviewService, deleteInterviewService } = require('../services/interview.service');
const { createInterviewValidation, updateInterviewValidation } = require('../validations/interview.validation');

const createInterviewController = async (req, res) => {
    try {
        const { error } = createInterviewValidation.body.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        await createInterviewService(req, res);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const fetchAllInterviewsController = async (req, res) => {
    try {
        await fetchAllInterviewsService(req, res);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const fetchInterviewByIdController = async (req, res) => {
    try {
        await fetchInterviewByIdService(req, res);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const updateInterviewController = async (req, res) => {
    try {
        const { error } = updateInterviewValidation.body.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        await updateInterviewService(req, res);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const deleteInterviewController = async (req, res) => {
    try {
        await deleteInterviewService(req, res);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {
    createInterviewController,
    fetchAllInterviewsController,
    fetchInterviewByIdController,
    updateInterviewController,
    deleteInterviewController
};