import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { VideoIcon, ExternalLink, Plus, Calendar, Clock, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Meetings = () => {
  const [showNewMeeting, setShowNewMeeting] = useState(false);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");

  const handleCreateMeeting = () => {
    if (meetingTitle) {
      toast({
        title: "Meeting Created",
        description: "Your meeting has been scheduled successfully",
      });
      setShowNewMeeting(false);
      setMeetingTitle("");
      setMeetingDescription("");
    }
  };

  const meetings = [
    {
      id: 1,
      title: "Math Tutoring Session",
      mentor: "Dr. Smith",
      date: "Today, 2:00 PM",
      status: "upcoming",
      platform: "Teams",
      link: "https://teams.microsoft.com/join/...",
    },
    {
      id: 2,
      title: "Career Guidance Meeting",
      mentor: "Prof. Johnson",
      date: "Tomorrow, 10:00 AM",
      status: "upcoming",
      platform: "Zoom",
      link: "https://zoom.us/j/...",
    },
    {
      id: 3,
      title: "Project Discussion",
      mentor: "Mr. Brown",
      date: "Dec 25, 3:30 PM",
      status: "completed",
      platform: "Google Meet",
      link: "https://meet.google.com/...",
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <main className="flex-1 p-6 bg-muted/30 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Meetings</h1>
              <p className="text-muted-foreground">Manage your mentor meetings and video calls</p>
            </div>
            <Button onClick={() => setShowNewMeeting(true)} className="shadow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Meeting
            </Button>
          </div>

          {showNewMeeting && (
            <Card className="mb-6 shadow-subtle">
              <CardHeader>
                <CardTitle>Schedule New Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Meeting Title</Label>
                    <Input
                      id="title"
                      value={meetingTitle}
                      onChange={(e) => setMeetingTitle(e.target.value)}
                      placeholder="Enter meeting title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mentor">Select Mentor</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a mentor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr-smith">Dr. Smith (Mathematics)</SelectItem>
                        <SelectItem value="prof-johnson">Prof. Johnson (Career)</SelectItem>
                        <SelectItem value="mr-brown">Mr. Brown (Projects)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date & Time</Label>
                    <Input type="datetime-local" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="platform">Meeting Platform</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teams">Microsoft Teams</SelectItem>
                        <SelectItem value="zoom">Zoom</SelectItem>
                        <SelectItem value="meet">Google Meet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="description">Meeting Description</Label>
                    <Textarea
                      id="description"
                      value={meetingDescription}
                      onChange={(e) => setMeetingDescription(e.target.value)}
                      placeholder="Describe the meeting purpose and agenda"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button onClick={handleCreateMeeting} className="shadow-primary">
                    Create Meeting
                  </Button>
                  <Button variant="outline" onClick={() => setShowNewMeeting(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-4">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="shadow-subtle">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{meeting.title}</h3>
                        <Badge variant={meeting.status === 'upcoming' ? 'default' : 'secondary'}>
                          {meeting.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {meeting.mentor}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {meeting.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <VideoIcon className="w-4 h-4" />
                          {meeting.platform}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {meeting.status === 'upcoming' && (
                        <Button className="shadow-primary">
                          <VideoIcon className="w-4 h-4 mr-2" />
                          Join Meeting
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Copy Link
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Meetings;