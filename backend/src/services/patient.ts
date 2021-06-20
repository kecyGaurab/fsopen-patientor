import patientData from '../../data/patients';
import { NewPatientEntry, NonSensitivePatientEntry, Patient } from '../types';
import { v1 as uuid } from 'uuid';
import patients from '../../data/patients';

const id = uuid()

const getPatients = () => {
  return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatientEntry[] => {
    return patientData.map(({name, id, occupation, gender, dateOfBirth}) => ({
        name, id, occupation, gender, dateOfBirth
    }))
  };

  const addPatient =  ( entry: NewPatientEntry ): Patient => {

  const newPatientEntry = {
    id: id,
    ...entry
  }

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient
};