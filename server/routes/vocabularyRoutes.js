import express from 'express'
import { addVocabulary, getVocabulary, getDailyVocabulary, deleteVocabulary } from '../controllers/vocabularyController.js';

const vocabularyRouter = express.Router();

vocabularyRouter.get('/', getVocabulary);
vocabularyRouter.post('/add', addVocabulary);
vocabularyRouter.get('/daily', getDailyVocabulary);
vocabularyRouter.delete('/:id', deleteVocabulary);

export default vocabularyRouter;
