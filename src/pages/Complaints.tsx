import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, MessageSquare, Eye, EyeOff, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Complaints = () => {
  const [showNewComplaint, setShowNewComplaint] = useState(false);
  const [complaintTitle, setComplaintTitle] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");

  const handleSubmitComplaint = () => {
    if (complaintTitle && complaintDescription) {
      toast({
        title: "Complaint Submitted",
        description: "Your anonymous complaint has been submitted securely",
      });
      setShowNewComplaint(false);
      setComplaintTitle("");
      setComplaintDescription("");
    }
  };

  const complaints = [
    {
      id: "COMP001",
      title: "Teaching Method Concerns",
      category: "Teaching Quality",
      description: "Issues with explanation clarity in advanced mathematics...",
      status: "under-review",
      submittedAt: "3 days ago",
      responses: 2,
      severity: "medium"
    },
    {
      id: "COMP002", 
      title: "Lab Equipment Issues",
      category: "Infrastructure",
      description: "Outdated computers affecting practical sessions...",
      status: "resolved",
      submittedAt: "1 week ago",
      responses: 4,
      severity: "high"
    },
    {
      id: "COMP003",
      title: "Staff Behavior Complaint",
      category: "Staff Conduct",
      description: "Unprofessional behavior during office hours...",
      status: "investigating",
      submittedAt: "2 days ago",
      responses: 1,
      severity: "high"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'under-review':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'investigating':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'resolved':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <main className="flex-1 p-6 bg-muted/30 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Anonymous Complaints</h1>
              <p className="text-muted-foreground">Secure and confidential reporting system for staff and teaching concerns</p>
            </div>
            <Button onClick={() => setShowNewComplaint(true)} className="shadow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Submit Complaint
            </Button>
          </div>

          {/* Privacy Notice */}
          <Card className="mb-6 border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium text-primary mb-1">Complete Anonymity Guaranteed</h3>
                  <p className="text-sm text-muted-foreground">
                    Your identity is completely protected. No personal information is stored or tracked. 
                    All complaints are reviewed confidentially by the administration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {showNewComplaint && (
            <Card className="mb-6 shadow-subtle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <EyeOff className="w-5 h-5 text-primary" />
                  Submit Anonymous Complaint
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="complaint-title">Complaint Title</Label>
                    <Input
                      id="complaint-title"
                      value={complaintTitle}
                      onChange={(e) => setComplaintTitle(e.target.value)}
                      placeholder="Brief description of the issue"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select complaint category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="teaching">Teaching Quality</SelectItem>
                          <SelectItem value="conduct">Staff Conduct</SelectItem>
                          <SelectItem value="infrastructure">Infrastructure</SelectItem>
                          <SelectItem value="discrimination">Discrimination</SelectItem>
                          <SelectItem value="harassment">Harassment</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="severity">Severity Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="How serious is this issue?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Minor concern</SelectItem>
                          <SelectItem value="medium">Medium - Needs attention</SelectItem>
                          <SelectItem value="high">High - Urgent action needed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      value={complaintDescription}
                      onChange={(e) => setComplaintDescription(e.target.value)}
                      placeholder="Please provide detailed information about the incident or concern. Include dates, locations, and any relevant context."
                      rows={6}
                    />
                  </div>

                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Important Reminders:</p>
                        <ul className="list-disc list-inside mt-1 space-y-1 text-muted-foreground">
                          <li>Your submission is completely anonymous</li>
                          <li>Provide as much detail as possible for proper investigation</li>
                          <li>False complaints may result in disciplinary action if identity is discovered</li>
                          <li>Emergency situations should be reported immediately to campus security</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Button onClick={handleSubmitComplaint} className="shadow-primary">
                    Submit Anonymous Complaint
                  </Button>
                  <Button variant="outline" onClick={() => setShowNewComplaint(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Previous Complaints (anonymized) */}
          <Card className="shadow-subtle">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-secondary" />
                Recent Anonymous Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complaints.map((complaint) => (
                  <div key={complaint.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-medium">{complaint.title}</h4>
                          <Badge className={getStatusColor(complaint.status)}>
                            {complaint.status.replace('-', ' ')}
                          </Badge>
                          <Badge className={getSeverityColor(complaint.severity)}>
                            {complaint.severity}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="mb-2">
                          {complaint.category}
                        </Badge>
                        <p className="text-muted-foreground text-sm mb-2">
                          {complaint.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span>ID: {complaint.id}</span>
                        <span>•</span>
                        <span>Submitted {complaint.submittedAt}</span>
                        <span>•</span>
                        <span>{complaint.responses} admin responses</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3 mr-2" />
                        Track Status
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h5 className="font-medium mb-2">System Statistics</h5>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-medium text-primary">24</p>
                    <p className="text-muted-foreground">Total Reports</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-success">89%</p>
                    <p className="text-muted-foreground">Resolution Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-secondary">4.2 days</p>
                    <p className="text-muted-foreground">Avg Response Time</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Complaints;