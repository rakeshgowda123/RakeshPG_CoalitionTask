import { Calendar, MapPin, Phone, Shield, Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Patient } from "@/types/patient";

interface PatientProfileProps {
  patient: Patient;
}

export const PatientProfile = ({ patient }: PatientProfileProps) => {
  return (
    <aside className="w-96 bg-card border-l border-border p-6 space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src={patient.profile_picture} alt={patient.name} />
              <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-foreground">{patient.name}</h2>
            
            <div className="w-full space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex-1 text-left">
                  <div className="text-sm text-muted-foreground">Date Of Birth</div>
                  <div className="font-medium">{patient.date_of_birth}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex-1 text-left">
                  <div className="text-sm text-muted-foreground">Gender</div>
                  <div className="font-medium">{patient.gender}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex-1 text-left">
                  <div className="text-sm text-muted-foreground">Contact Info</div>
                  <div className="font-medium">{patient.phone_number}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex-1 text-left">
                  <div className="text-sm text-muted-foreground">Emergency Contacts</div>
                  <div className="font-medium">{patient.emergency_contact}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex-1 text-left">
                  <div className="text-sm text-muted-foreground">Insurance Provider</div>
                  <div className="font-medium">{patient.insurance_type}</div>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary/90">
              Show All Information
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Lab Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {patient.lab_results.map((result, index) => (
              <div key={index} className="flex items-center justify-between py-2 hover:bg-secondary/50 px-2 rounded-lg transition-colors">
                <span className="text-sm font-medium">{result.test_name}</span>
                <Button variant="ghost" size="icon">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
