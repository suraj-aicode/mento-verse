import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock } from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Math Tutoring",
      mentor: "Dr. Smith",
      date: "2024-12-29",
      time: "10:00 AM",
      type: "meeting",
    },
    {
      id: 2,
      title: "Career Guidance",
      mentor: "Prof. Johnson",
      date: "2024-12-30",
      time: "2:00 PM", 
      type: "counseling",
    },
    {
      id: 3,
      title: "Project Review",
      mentor: "Mr. Brown",
      date: "2024-12-31",
      time: "4:00 PM",
      type: "meeting",
    },
  ];

  const upcomingEvents = [
    { title: "Physics Lab Session", time: "9:00 AM", mentor: "Dr. Wilson", type: "lab" },
    { title: "Career Workshop", time: "11:30 AM", mentor: "Prof. Davis", type: "workshop" },
    { title: "One-on-One Mentoring", time: "3:00 PM", mentor: "Ms. Taylor", type: "meeting" },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-primary text-primary-foreground';
      case 'counseling':
        return 'bg-secondary text-secondary-foreground';
      case 'lab':
        return 'bg-accent text-accent-foreground';
      case 'workshop':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <main className="flex-1 p-6 bg-muted/30 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Meeting Calendar</h1>
              <p className="text-muted-foreground">Schedule and track all your mentor meetings</p>
            </div>
            <Button className="shadow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Meeting
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar View */}
            <div className="lg:col-span-2">
              <Card className="shadow-subtle">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                      {formatMonth(currentDate)}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                        {day}
                      </div>
                    ))}
                    
                    {/* Calendar Days */}
                    {Array.from({ length: 35 }, (_, i) => {
                      const dayNum = i - 6; // Adjust for starting position
                      const isToday = dayNum === 29;
                      const hasEvent = [29, 30, 31].includes(dayNum);
                      
                      return (
                        <div key={i} className={`
                          aspect-square p-1 border border-border/50 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors
                          ${isToday ? 'bg-primary text-primary-foreground' : ''}
                          ${dayNum < 1 || dayNum > 31 ? 'text-muted-foreground/30' : ''}
                        `}>
                          <div className="h-full flex flex-col">
                            <span className="text-sm">{dayNum > 0 && dayNum <= 31 ? dayNum : ''}</span>
                            {hasEvent && (
                              <div className="flex-1 flex items-end">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Today's Events */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Scheduled Events</h4>
                    {events.map(event => (
                      <div key={event.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        <div className="flex-1">
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {event.time} • {event.mentor}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule */}
            <div className="space-y-6">
              <Card className="shadow-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{event.title}</p>
                          <p className="text-xs text-muted-foreground">{event.time}</p>
                          <p className="text-xs text-muted-foreground">with {event.mentor}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 shadow-primary">
                    Join Next Meeting
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-sm">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">This Week</span>
                      <span className="font-medium">8 meetings</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">This Month</span>
                      <span className="font-medium">24 meetings</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Completion Rate</span>
                      <span className="font-medium text-success">94%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calendar;