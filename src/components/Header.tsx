import { Home, Users, Calendar, MessageSquare, CreditCard, Settings, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  doctorName: string;
  doctorRole: string;
  doctorImage?: string;
}

export const Header = ({ doctorName, doctorRole, doctorImage }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-primary-foreground rounded-full" />
          </div>
          <span className="text-xl font-bold text-foreground">Tech.Care</span>
        </div>

        <nav className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home className="w-4 h-4" />
            <span className="hidden md:inline">Overview</span>
          </Button>
          <Button variant="default" size="sm" className="gap-2 bg-primary hover:bg-primary/90">
            <Users className="w-4 h-4" />
            <span className="hidden md:inline">Patients</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Calendar className="w-4 h-4" />
            <span className="hidden md:inline">Schedule</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            <span className="hidden md:inline">Message</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <CreditCard className="w-4 h-4" />
            <span className="hidden md:inline">Transactions</span>
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={doctorImage} alt={doctorName} />
            <AvatarFallback>{doctorName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <div className="text-sm font-medium text-foreground">{doctorName}</div>
            <div className="text-xs text-muted-foreground">{doctorRole}</div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
