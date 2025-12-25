import Theory from "../models/Theory.js"

export const addTheory = async (req, res) => {
    try {
        const {subject, question, explanation} = req.body

        if(!subject || !question || !explanation) {
            return res.json({
                success: false,
                message: "Missing fields"
            })
        }

        await Theory.create({
            subject, 
            question, 
            explanation
        })

        res.json({
            success: true,
            message: "Theory++"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const getTheory = async (req, res) => {
    try {
        const theories = await Theory.find()
        res.json({
            success: true,
            theories
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}