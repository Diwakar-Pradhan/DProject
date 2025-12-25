import mongoose from "mongoose"

const theoryScheme = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },

    question: {
        type: String,
        required: true
    },

    explanation: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Theory = mongoose.model("theory", theoryScheme);

export default Theory;