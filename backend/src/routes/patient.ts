import express from 'express';
import patientService from '../services/patient';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientService.getNonSensitivePatients());
});

router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default router;