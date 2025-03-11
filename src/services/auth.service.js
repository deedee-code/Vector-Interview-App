const User = require('../models/auth.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerService = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role } = req.body;

        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        const registeredUser = { ...newUser._doc };
        delete registeredUser.password;

        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            data: registeredUser,
            token
        });
    }
    catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const loginService = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({email});

        if (!existingUser) {
            return res.status(400).json({message: 'User not found'});
        }

        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }
        
        const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        const user = { ...existingUser._doc };
        delete user.password;

        res.status(200).json({
            status: 'success',
            message: 'User logged in successfully',
            data: user,
            token
        });
    }
    catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = {
    registerService,
    loginService
};