import { Search, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Patient } from "@/types/patient";
import { cn } from "@/lib/utils";

interface PatientListProps {
  patients: Patient[];
  selectedPatient: Patient | null;
  onSelectPatient: (patient: Patient) => void;
}

export const PatientList = ({ patients, selectedPatient, onSelectPatient }: PatientListProps) => {
  return (
    <aside className="w-80 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Patients</h2>
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
        <Input 
          placeholder="Search patients..." 
          className="w-full"
        />
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {patients.map((patient, index) => (
          <button
            key={index}
            onClick={() => onSelectPatient(patient)}
            className={cn(
              "w-full flex items-center gap-3 p-4 border-b border-border hover:bg-secondary/50 transition-colors",
              selectedPatient?.name === patient.name && "bg-primary/10"
            )}
          >
            <Avatar>
              <AvatarImage src={patient.profile_picture} alt={patient.name} />
              <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left">
              <div className="font-medium text-foreground">{patient.name}</div>
              <div className="text-sm text-muted-foreground">{patient.gender}, {patient.age}</div>
            </div>
            <Button variant="ghost" size="icon" className="shrink-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </button>
        ))}
      </div>
    </aside>
  );
};
