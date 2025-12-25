import express from 'express'
import { addVocabulary, getVocabulary } from '../controllers/vocabularyController.js';

const vocabularyRouter = express.Router();

vocabularyRouter.get('/', getVocabulary);
vocabularyRouter.post('/add', addVocabulary);

export default vocabularyRouter;
