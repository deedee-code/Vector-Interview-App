const { registerService, loginService } = require('../services/auth.service');
const userValidation = require('../validations/user.validation');

const registerController = async (req, res) => {
    try {
        const { error } = userValidation.register.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        await registerService(req, res);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const loginController = async (req, res) => {
    try {
        const { error } = userValidation.login.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        await loginService(req, res);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {
    registerController,
    loginController
};