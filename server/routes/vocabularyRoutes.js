import express from 'express'
import { addVocabulary, getVocabulary, getDailyVocabulary } from '../controllers/vocabularyController.js';

const vocabularyRouter = express.Router();

vocabularyRouter.get('/', getVocabulary);
vocabularyRouter.post('/add', addVocabulary);
vocabularyRouter.get('/daily', getDailyVocabulary);

export default vocabularyRouter;
