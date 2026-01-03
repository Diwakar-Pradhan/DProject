import express from 'express'
import { addTip, getTip, getDailyTip } from '../controllers/tipController.js'

const tipRouter = express.Router()

tipRouter.get('/', getTip)
tipRouter.post('/add', addTip)
tipRouter.get('/daily', getDailyTip)

export default tipRouter;