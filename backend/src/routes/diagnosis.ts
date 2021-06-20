import express from 'express';
import diagnosisService from '../services/diagnosis'

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(diagnosisService.getDiagnoses());
});

router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default router;