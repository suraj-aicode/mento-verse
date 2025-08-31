import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Calendar, Users } from "lucide-react";

const Attendance = () => {
  const attendanceData = [
    { subject: "Mathematics", attended: 18, total: 20, percentage: 90 },
    { subject: "Physics", attended: 16, total: 18, percentage: 89 },
    { subject: "Chemistry", attended: 14, total: 16, percentage: 87 },
    { subject: "Computer Science", attended: 22, total: 24, percentage: 92 },
    { subject: "English", attended: 15, total: 16, percentage: 94 },
  ];

  const recentAttendance = [
    { date: "Dec 28, 2024", subject: "Mathematics", status: "present", mentor: "Dr. Smith" },
    { date: "Dec 27, 2024", subject: "Physics", status: "present", mentor: "Prof. Wilson" },
    { date: "Dec 26, 2024", subject: "Chemistry", status: "absent", mentor: "Dr. Johnson" },
    { date: "Dec 25, 2024", subject: "Computer Science", status: "present", mentor: "Mr. Brown" },
  ];

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 90) return "text-success bg-success/10";
    if (percentage >= 75) return "text-warning bg-warning/10";
    return "text-destructive bg-destructive/10";
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <main className="flex-1 p-6 bg-muted/30 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Attendance Dashboard</h1>
            <p className="text-muted-foreground">Track your attendance across all subjects and meetings</p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-subtle">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Overall Attendance</p>
                    <p className="text-3xl font-bold text-success">91%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-subtle">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Classes This Month</p>
                    <p className="text-3xl font-bold">94</p>
                  </div>
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-subtle">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Mentor Sessions</p>
                    <p className="text-3xl font-bold">15</p>
                  </div>
                  <Users className="w-8 h-8 text-secondary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Subject-wise Attendance */}
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Subject-wise Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendanceData.map((item, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{item.subject}</h4>
                        <Badge className={getAttendanceColor(item.percentage)}>
                          {item.percentage}%
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>{item.attended} / {item.total} classes</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-primary"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Attendance */}
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  Recent Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAttendance.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{item.subject}</p>
                        <p className="text-sm text-muted-foreground">{item.date} • {item.mentor}</p>
                      </div>
                      <Badge 
                        variant={item.status === 'present' ? 'default' : 'destructive'}
                        className={item.status === 'present' ? 'bg-success text-success-foreground' : ''}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Attendance;