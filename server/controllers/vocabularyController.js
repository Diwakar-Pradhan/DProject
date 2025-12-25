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