import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageSquare, BarChart3, Clock, CheckCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <main className="flex-1 p-6 bg-muted/30 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's your academic overview for today</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-subtle">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Upcoming Meetings</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-subtle">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Open Queries</p>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-subtle">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Attendance Rate</p>
                    <p className="text-2xl font-bold">92%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-subtle">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Resolved Issues</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Meetings */}
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Recent Meetings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Math Tutoring", mentor: "Dr. Smith", time: "2 hours ago", status: "Completed" },
                    { title: "Career Guidance", mentor: "Prof. Johnson", time: "1 day ago", status: "Completed" },
                    { title: "Project Discussion", mentor: "Mr. Brown", time: "2 days ago", status: "Completed" }
                  ].map((meeting, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{meeting.title}</p>
                        <p className="text-sm text-muted-foreground">with {meeting.mentor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{meeting.time}</p>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-success/10 text-success">
                          {meeting.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Meetings
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Schedule */}
            <Card className="shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "10:00 AM", title: "Physics Doubt Session", mentor: "Dr. Wilson" },
                    { time: "2:00 PM", title: "Project Review", mentor: "Prof. Davis" },
                    { time: "4:30 PM", title: "Career Counseling", mentor: "Ms. Taylor" }
                  ].map((event, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                      <div className="text-center">
                        <div className="w-2 h-2 bg-primary rounded-full mb-1"></div>
                        <p className="text-xs font-medium">{event.time}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">with {event.mentor}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 shadow-primary">
                  Join Next Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;