import { Gender, NewPatientEntry } from '../types';

type Fields = { name : unknown, dateOfBirth: unknown, gender: unknown, ssn: unknown, occupation: unknown };


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };

  const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
  };

const parseName = (name: unknown): string => {
    if(!name || !isString(name)) {
        throw new Error('Incorrect or missing name')
    }
    return name;
}
const parseOccupation = (occupation: unknown): string => {
    if(!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation')
    }
    return occupation;
}
const parseSsn = (ssn: unknown): string => {
    if(!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing ssn')
    }
    return ssn;
}

const parseDate = (date: unknown): string => {
    if(!date ||!isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date')
    }
    return date;
}

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender)
    }
    return gender;
  };

const toNewDiaryEntry = ({name, dateOfBirth, ssn, gender, occupation}: Fields): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseName(name),
    dateOfBirth: parseDate(dateOfBirth),
    occupation: parseOccupation(occupation),
    ssn: parseSsn(ssn),
    gender: parseGender(gender)
  }

  return newEntry;
}

export default toNewDiaryEntry;