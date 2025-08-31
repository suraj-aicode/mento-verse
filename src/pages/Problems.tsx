import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileQuestion, TrendingUp, AlertTriangle, CheckCircle, Clock, Users } from "lucide-react";

const Problems = () => {
  const problemStats = [
    { label: "Total Problems Submitted", value: 45, icon: FileQuestion, color: "text-primary" },
    { label: "Resolved Issues", value: 38, icon: CheckCircle, color: "text-success" },
    { label: "In Progress", value: 5, icon: Clock, color: "text-warning" },
    { label: "Pending Review", value: 2, icon: AlertTriangle, color: "text-destructive" },
  ];

  const studentProblems = [
    {
      studentId: "CS2024001",
      studentName: "John Doe",
      totalProblems: 12,
      resolved: 10,
      pending: 2,
      lastActivity: "2 days ago",
      subjects: ["Mathematics", "Physics"],
    },
    {
      studentId: "CS2024002", 
      studentName: "Jane Smith",
      totalProblems: 8,
      resolved: 7,
      pending: 1,
      lastActivity: "1 day ago",
      subjects: ["Computer Science"],
    },
    {
      studentId: "CS2024003",
      studentName: "Bob Johnson",
      totalProblems: 15,
      resolved: 12,
      pending: 3,
      lastActivity: "3 hours ago",
      subjects: ["Chemistry", "Mathematics"],
    },
  ];

  const recentActions = [
    {
      id: 1,
      action: "Problem Resolved",
      student: "John Doe",
      problem: "Calculus Integration Query",
      mentor: "Dr. Smith",
      timestamp: "2 hours ago",
      type: "resolved"
    },
    {
      id: 2,
      action: "New Assignment",
      student: "Jane Smith",
      problem: "Database Design Query",
      mentor: "Mr. Brown", 
      timestamp: "4 hours ago",
      type: "assigned"
    },
    {
      id: 3,
      action: "Follow-up Required",
      student: "Bob Johnson",
      problem: "Career Guidance Request",
      mentor: "Prof. Johnson",
      timestamp: "6 hours ago", 
      type: "followup"
    },
  ];

  const getActionColor = (type: string) => {
    switch (type) {
      case 'resolved':
        return 'bg-success/10 text-success border-success/20';
      case 'assigned':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'followup':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getCompletionRate = (resolved: number, total: number) => {
    return Math.round((resolved / total) * 100);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <main className="flex-1 p-6 bg-muted/30 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Problem Tracking Dashboard</h1>
            <p className="text-muted-foreground">Monitor student issues and college action responses</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {problemStats.map((stat, index) => (
              <Card key={index} className="shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Student Problem Summary */}
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Student Problem Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentProblems.map((student, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{student.studentName}</h4>
                          <p className="text-sm text-muted-foreground">{student.studentId}</p>
                        </div>
                        <Badge variant="outline">
                          {getCompletionRate(student.resolved, student.totalProblems)}% Complete
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-primary">{student.totalProblems}</p>
                          <p className="text-muted-foreground">Total</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-success">{student.resolved}</p>
                          <p className="text-muted-foreground">Resolved</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-warning">{student.pending}</p>
                          <p className="text-muted-foreground">Pending</p>
                        </div>
                      </div>

                      <div className="w-full bg-muted rounded-full h-2 mb-3">
                        <div
                          className="h-2 rounded-full bg-gradient-primary"
                          style={{ width: `${getCompletionRate(student.resolved, student.totalProblems)}%` }}
                        ></div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex gap-1">
                          {student.subjects.map((subject, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-muted-foreground">Last: {student.lastActivity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Actions */}
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  Recent College Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActions.map((action) => (
                    <div key={action.id} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={getActionColor(action.type)}>
                              {action.action}
                            </Badge>
                          </div>
                          <h4 className="font-medium">{action.problem}</h4>
                          <div className="text-sm text-muted-foreground mt-1">
                            <p>Student: {action.student}</p>
                            <p>Handled by: {action.mentor}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{action.timestamp}</span>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h5 className="font-medium mb-2">Action Response Time</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Average Response</p>
                      <p className="font-medium text-success">2.3 hours</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Resolution Rate</p>
                      <p className="font-medium text-success">94%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Problems;