import express from 'express';
import patientService from '../services/patient';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientService.getNonSensitivePatients());
});


router.post('/', (req, res) => {
  try {
    const { name, dateOfBirth, occupation, gender, ssn } = req.body;
    const newPatientEntry = patientService.addPatient(
     { name,
      dateOfBirth,
      occupation,
      gender,
      ssn
    }
    );
    res.json(newPatientEntry);
    
  }catch (error) {
      res.status(400).send(error.message)
  }
});


export default router;