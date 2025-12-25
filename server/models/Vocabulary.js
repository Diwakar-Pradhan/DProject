import mongoose from "mongoose";

const vocabularyScheme = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },

    meaning: {
        type: String,
        required: true
    },

    similar: {
        type: String,
        required: true
    },

    examples: {
        type: String,
        required: true
    }

}, {timestamps: true});

const Vocabulary = mongoose.model('vocabulary', vocabularyScheme)

export default Vocabulary;