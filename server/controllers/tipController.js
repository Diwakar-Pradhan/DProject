import Tip from "../models/Tip.js"

export const addTip = async (req, res) => {
    try {
        const {field, note} = req.body

        if(!field || !note) {
            return res.json({
                success: false,
                message: "Missing Fields"
            })
        }

        await Tip.create({
            field,
            note
        })

        res.json({
            success: true,
            message: "Tip added"
        })

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export const getTip = async (req, res) => {
    try {
        const tips = await Tip.find()
        res.json({
            success: true,
            tips
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })   
    }
}