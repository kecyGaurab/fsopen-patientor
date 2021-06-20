import patientData from '../../data/patients';
import { NonSensitivePatientEntry } from '../../types';


const getPatients = () => {
  return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatientEntry[] => {
    return patientData.map(({name, id, occupation, gender, dateOfBirth}) => ({
        name, id, occupation, gender, dateOfBirth
    }))
  };

const addpatient = () => {
  return null;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addpatient
};