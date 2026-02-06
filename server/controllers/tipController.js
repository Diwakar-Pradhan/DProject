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

export const getDailyTip = async (req, res) => {
    try {
        const tips = await Tip.find().sort({ _id: 1 });
        if (tips.length === 0) {
            return res.json({
                success: false,
                message: "No tips available"
            });
        }
        const fixedDate = new Date(2020, 0, 1); // Jan 1, 2020
        const today = new Date();
        const daysSince = Math.floor((today - fixedDate) / (1000 * 60 * 60 * 24));
        const index = daysSince % tips.length;
        res.json({
            success: true,
            tip: tips[index]
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}

export const deleteTip = async (req, res) => {
    try {
        const { id } = req.params
        
        if (!id) {
            return res.json({
                success: false,
                message: "Tip ID is required"
            })
        }

        await Tip.findByIdAndDelete(id)

        res.json({
            success: true,
            message: "Tip deleted successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}