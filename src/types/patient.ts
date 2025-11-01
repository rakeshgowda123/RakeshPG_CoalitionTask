export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: Diagnostic[];
  lab_results: LabResult[];
  emergency_contact: string;
  insurance_type: string;
  phone_number: string;
}

export interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: {
    systolic: {
      value: number;
      levels: string;
    };
    diastolic: {
      value: number;
      levels: string;
    };
  };
  heart_rate: {
    value: number;
    levels: string;
  };
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: {
    value: number;
    levels: string;
  };
}

export interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

export interface LabResult {
  test_name: string;
  result: string;
}
