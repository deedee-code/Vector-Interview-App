const joi = require('joi');

const createInterviewValidation = {
    body: joi.object({
        interviewer: joi.string().required(),
        interviewee: joi.string().required(),
        title: joi.string().required(),
        description: joi.string().required(),
        date: joi.date().required(),
        duration: joi.number().required(),
        status: joi.string().required(),
        feedback: joi.string().required(),
        rating: joi.number(),
        questions: joi.array().items(joi.object({
            question: joi.string().required(),
            answer: joi.string()
        }))
    })
};

const updateInterviewValidation = {
    body: joi.object({
        interviewer: joi.string(),
        interviewee: joi.string(),
        title: joi.string(),
        description: joi.string(),
        date: joi.date(),
        duration: joi.number(),
        status: joi.string(),
        feedback: joi.string(),
        rating: joi.number(),
        questions: joi.array().items(joi.object({
            question: joi.string(),
            answer: joi.string()
        }))
    })
};

module.exports = { createInterviewValidation, updateInterviewValidation };