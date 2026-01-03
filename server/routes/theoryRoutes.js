import express from 'express'
import { addTheory, getTheory, getDailyTheory } from '../controllers/theoryController.js'

const theoryRouter = express.Router()

theoryRouter.get('/', getTheory)
theoryRouter.post('/add', addTheory)
theoryRouter.get('/daily', getDailyTheory)

export default theoryRouter