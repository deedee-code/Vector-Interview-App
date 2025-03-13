const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    interviewer: {
        type: String,
        required: true,
    },
    interviewee: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
    questions:[
        {
            question: {
                type: String,
                required: true,
            },
            answer: {
                type: String,
            },
        }
    ]
    }, {
    timestamps: true,
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;