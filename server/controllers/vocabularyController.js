import Vocabulary from "../models/Vocabulary.js"

export const addVocabulary = async (req, res) => {
    try {
        //fields data from req
        const {word, meaning, similar, examples} = req.body

        //if all fields are not present
        if(!word || !meaning || !similar || !examples) {
            return res.json({
                success: false,
                message: "Missing required fields"
            })
        }

        //creating in database
        await Vocabulary.create({
            word,
            meaning,
            similar,
            examples
        })

        res.json({
            success: true,
            message: "Vocabulary++"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const getVocabulary = async (req, res) => {
    try {
        const vocabularys = await Vocabulary.find()
        res.json({
            success: true,
            vocabularys
        })

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const getDailyVocabulary = async (req, res) => {
    try {
        const vocabularys = await Vocabulary.find().sort({ _id: 1 });
        if (vocabularys.length === 0) {
            return res.json({
                success: false,
                message: "No vocabularies available"
            });
        }
        const fixedDate = new Date(2020, 0, 1); // Jan 1, 2020
        const today = new Date();
        const daysSince = Math.floor((today - fixedDate) / (1000 * 60 * 60 * 24));
        const index = daysSince % vocabularys.length;
        res.json({
            success: true,
            vocabulary: vocabularys[index]
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}