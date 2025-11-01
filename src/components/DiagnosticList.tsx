import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Diagnostic } from "@/types/patient";

interface DiagnosticListProps {
  diagnostics: Diagnostic[];
}

export const DiagnosticList = ({ diagnostics }: DiagnosticListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Diagnostic List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Problem/Diagnosis</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {diagnostics.map((diagnostic, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{diagnostic.name}</TableCell>
                <TableCell className="text-muted-foreground">{diagnostic.description}</TableCell>
                <TableCell>{diagnostic.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
