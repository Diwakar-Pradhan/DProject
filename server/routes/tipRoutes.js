import express from 'express'
import { addTip, getTip } from '../controllers/tipController.js'

const tipRouter = express.Router()

tipRouter.get('/', getTip)
tipRouter.post('/add', addTip)

export default tipRouter;