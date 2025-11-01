import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Header } from "@/components/Header";
import { PatientList } from "@/components/PatientList";
import { DiagnosisHistory } from "@/components/DiagnosisHistory";
import { DiagnosticList } from "@/components/DiagnosticList";
import { PatientProfile } from "@/components/PatientProfile";
import { Patient } from "@/types/patient";
import { Loader2 } from "lucide-react";

const fetchPatients = async (): Promise<Patient[]> => {
  const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    headers: {
      'Authorization': 'Basic ' + btoa('coalition:skills-test')
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch patients');
  }
  
  return response.json();
};

const Index = () => {
  const { data: patients, isLoading, error } = useQuery({
    queryKey: ['patients'],
    queryFn: fetchPatients,
  });

  const jessicaTaylor = patients?.find(p => p.name === "Jessica Taylor");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  // Auto-select Jessica Taylor when data loads
  if (jessicaTaylor && !selectedPatient) {
    setSelectedPatient(jessicaTaylor);
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-2">Error Loading Data</h2>
          <p className="text-muted-foreground">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        doctorName="Dr. Jose Simmons" 
        doctorRole="General Practitioner"
        doctorImage="https://api.dicebear.com/7.x/avataaars/svg?seed=Jose"
      />
      
      <div className="flex">
        {patients && (
          <PatientList 
            patients={patients} 
            selectedPatient={selectedPatient}
            onSelectPatient={setSelectedPatient}
          />
        )}
        
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {selectedPatient && (
            <>
              <DiagnosisHistory history={selectedPatient.diagnosis_history} />
              <DiagnosticList diagnostics={selectedPatient.diagnostic_list} />
            </>
          )}
        </main>
        
        {selectedPatient && (
          <PatientProfile patient={selectedPatient} />
        )}
      </div>
    </div>
  );
};

export default Index;
