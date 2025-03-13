const Interview = require('../models/interview.model');


const createInterviewService = async (req, res) => {
    try {
        const { interviewer, interviewee, title, description, date, duration, status, feedback, rating, questions } = req.body;

        const interview = new Interview({
            interviewer,
            interviewee,
            title,
            description,
            date,
            duration,
            status,
            feedback,
            rating,
            questions
        });

        await interview.save();
        res.status(201).json({
            status: 'success',
            message: 'Interview created successfully',
            data: interview
        });
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const fetchAllInterviewsService = async (req, res) => {
    try {
        const interviews = await Interview.find();
        res.status(200).json({
            status: 'success',
            message: 'Interviews fetched successfully',
            data: interviews
        });
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const fetchInterviewByIdService = async (req, res) => {
    const { interviewId } = req.params;

    try {
        const interview = await Interview.findById(interviewId);
        if (!interview) {
            return res.status(404).json({message: 'Interview not found'});
        }

        res.status(200).json({
            status: 'success',
            message: 'Interview fetched successfully',
            data: interview
        });
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const updateInterviewService = async (req, res) => {
    const { interviewId } = req.params;

    try {
        const interview = await Interview.findByIdAndUpdate(interviewId, req.body, { new: true });
        if (!interview) {
            return res.status(404).json({message: 'Interview not found'});
        }

        res.status(200).json({
            status: 'success',
            message: 'Interview updated successfully',
            data: interview
        });
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});        
    }
};

const deleteInterviewService = async (req, res) => {
    const { interviewId } = req.params;

    try {
        const interview = await Interview.findByIdAndRemove(interviewId);
        if (!interview) {
            return res.status(404).json({message: 'Interview not found'});
        }

        res.status(204).json({status: 'success', message: 'Interview deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {
    createInterviewService,
    fetchAllInterviewsService,
    fetchInterviewByIdService,
    updateInterviewService,
    deleteInterviewService
};