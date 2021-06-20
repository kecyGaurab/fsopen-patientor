export type Gender = 'male' | 'female' | 'other';

export interface Diagnosis {
    code:string,
    name: string,
    latin ?: string
  }

export interface Patient {
    name:string,
    id:string,
    dateOfBirth:string,
    ssn:string,
    occupation:string,
    gender: Gender,
}

export type NonSensitivePatientEntry = Omit<Patient, 'ssn'>;

export type NewPatientEntry = Omit<Patient, 'id'>;

