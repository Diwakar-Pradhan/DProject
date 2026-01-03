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

export const getDailyTheory = async (req, res) => {
    try {
        const theories = await Theory.find().sort({ _id: 1 });
        if (theories.length === 0) {
            return res.json({
                success: false,
                message: "No theories available"
            });
        }
        const fixedDate = new Date(2020, 0, 1); // Jan 1, 2020
        const today = new Date();
        const daysSince = Math.floor((today - fixedDate) / (1000 * 60 * 60 * 24));
        const index = daysSince % theories.length;
        res.json({
            success: true,
            theory: theories[index]
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}