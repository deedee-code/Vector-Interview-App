const joi = require('joi');

const userValidation = {
  register: joi.object({
    firstName: joi.string().required().min(3),
    lastName: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required(),
    role: joi.string().required().valid('Recruiter', 'Candidate', 'Evaluator', 'HR')
  }),
  login: joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
  })
};

module.exports = userValidation;