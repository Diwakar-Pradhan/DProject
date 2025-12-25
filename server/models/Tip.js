import mongoose from "mongoose";

const tipScheme = new mongoose.Schema({
    field: {
        type: String,
        required: true
    },

    note: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Tip = mongoose.model('tip', tipScheme)

export default Tip;