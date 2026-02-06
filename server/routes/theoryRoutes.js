import express from 'express'
import { addTheory, getTheory, getDailyTheory, deleteTheory } from '../controllers/theoryController.js'

const theoryRouter = express.Router()

theoryRouter.get('/', getTheory)
theoryRouter.post('/add', addTheory)
theoryRouter.get('/daily', getDailyTheory)
theoryRouter.delete('/:id', deleteTheory)

export default theoryRouter