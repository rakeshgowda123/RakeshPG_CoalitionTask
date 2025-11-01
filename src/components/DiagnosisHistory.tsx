import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DiagnosisHistory as DiagnosisHistoryType } from "@/types/patient";
import { Activity, Thermometer, Heart, TrendingUp, TrendingDown } from "lucide-react";

interface DiagnosisHistoryProps {
  history: DiagnosisHistoryType[];
}

export const DiagnosisHistory = ({ history }: DiagnosisHistoryProps) => {
  const chartData = history.slice(-6).map(item => ({
    name: `${item.month.slice(0, 3)}, ${item.year}`,
    systolic: item.blood_pressure.systolic.value,
    diastolic: item.blood_pressure.diastolic.value,
  }));

  const latestData = history[history.length - 1];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">Diagnosis History</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Blood Pressure</h3>
              <Select defaultValue="6months">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6months">Last 6 months</SelectItem>
                  <SelectItem value="1year">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="systolic" 
                    stroke="hsl(var(--chart-systolic))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--chart-systolic))', r: 4 }}
                    name="Systolic"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="diastolic" 
                    stroke="hsl(var(--chart-diastolic))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--chart-diastolic))', r: 4 }}
                    name="Diastolic"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-systolic" />
                  <span className="text-sm font-medium">Systolic</span>
                </div>
                <div className="text-2xl font-bold">{latestData.blood_pressure.systolic.value}</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  {latestData.blood_pressure.systolic.levels === "Higher than Average" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {latestData.blood_pressure.systolic.levels}
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-diastolic" />
                  <span className="text-sm font-medium">Diastolic</span>
                </div>
                <div className="text-2xl font-bold">{latestData.blood_pressure.diastolic.value}</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  {latestData.blood_pressure.diastolic.levels === "Lower than Average" ? (
                    <TrendingDown className="w-4 h-4" />
                  ) : (
                    <TrendingUp className="w-4 h-4" />
                  )}
                  {latestData.blood_pressure.diastolic.levels}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-vital-respiratory">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Respiratory Rate</div>
              <div className="text-3xl font-bold text-foreground">{latestData.respiratory_rate.value} bpm</div>
              <div className="text-xs text-muted-foreground">{latestData.respiratory_rate.levels}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-vital-temperature">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                <Thermometer className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-sm text-muted-foreground">Temperature</div>
              <div className="text-3xl font-bold text-foreground">{latestData.temperature.value}°F</div>
              <div className="text-xs text-muted-foreground">{latestData.temperature.levels}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-vital-heart">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-destructive" />
              </div>
              <div className="text-sm text-muted-foreground">Heart Rate</div>
              <div className="text-3xl font-bold text-foreground">{latestData.heart_rate.value} bpm</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                {latestData.heart_rate.levels === "Lower than Average" ? (
                  <TrendingDown className="w-3 h-3" />
                ) : (
                  <TrendingUp className="w-3 h-3" />
                )}
                {latestData.heart_rate.levels}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
