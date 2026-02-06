import express from 'express'
import { addTip, getTip, getDailyTip, deleteTip } from '../controllers/tipController.js'

const tipRouter = express.Router()

tipRouter.get('/', getTip)
tipRouter.post('/add', addTip)
tipRouter.get('/daily', getDailyTip)
tipRouter.delete('/:id', deleteTip)

export default tipRouter;