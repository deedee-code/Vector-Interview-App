const User = require('../models/auth.model');
const jwt = require('jsonwebtoken');

const authMiddleware = (allowedRoles) => async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select('-password');
            
            if (!allowedRoles.includes(req.user.role)) {
                res.status(403);
                throw new Error('Not authorized as ' + req.user.role);
            }
            next();
        }
        catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
}

module.exports = authMiddleware;