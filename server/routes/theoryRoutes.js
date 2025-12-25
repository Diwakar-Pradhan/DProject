import express from 'express'
import { addTheory, getTheory } from '../controllers/theoryController.js'

const theoryRouter = express.Router()

theoryRouter.get('/', getTheory)
theoryRouter.post('/add', addTheory)

export default theoryRouter