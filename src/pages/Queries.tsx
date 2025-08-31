import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Upload, MessageSquare, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Queries = () => {
  const [showNewQuery, setShowNewQuery] = useState(false);
  const [queryTitle, setQueryTitle] = useState("");
  const [queryDescription, setQueryDescription] = useState("");

  const handleSubmitQuery = () => {
    if (queryTitle && queryDescription) {
      toast({
        title: "Query Submitted",
        description: "Your query has been submitted successfully",
      });
      setShowNewQuery(false);
      setQueryTitle("");
      setQueryDescription("");
    }
  };

  const queries = [
    {
      id: 1,
      title: "Calculus Integration Problem",
      subject: "Mathematics",
      description: "Need help with integration by parts method...",
      status: "pending",
      submittedAt: "2 hours ago",
      mentor: "Dr. Smith",
    },
    {
      id: 2,
      title: "Career Path Guidance",
      subject: "Career Counseling",
      description: "Confused about choosing between software engineering and data science...",
      status: "in-progress",
      submittedAt: "1 day ago",
      mentor: "Prof. Johnson",
    },
    {
      id: 3,
      title: "Project Database Design",
      subject: "Computer Science",
      description: "How to design efficient database schema for my project...",
      status: "resolved",
      submittedAt: "3 days ago",
      mentor: "Mr. Brown",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'in-progress':
        return <AlertCircle className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'in-progress':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'resolved':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <main className="flex-1 p-6 bg-muted/30 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Academic Queries</h1>
              <p className="text-muted-foreground">Submit your academic doubts and get expert guidance</p>
            </div>
            <Button onClick={() => setShowNewQuery(true)} className="shadow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Submit Query
            </Button>
          </div>

          {showNewQuery && (
            <Card className="mb-6 shadow-subtle">
              <CardHeader>
                <CardTitle>Submit New Query</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="query-title">Query Title</Label>
                    <Input
                      id="query-title"
                      value={queryTitle}
                      onChange={(e) => setQueryTitle(e.target.value)}
                      placeholder="Enter your query title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="career">Career Counseling</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Attach Files</Label>
                    <Button variant="outline" className="w-full">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Files
                    </Button>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      value={queryDescription}
                      onChange={(e) => setQueryDescription(e.target.value)}
                      placeholder="Describe your query in detail..."
                      rows={4}
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button onClick={handleSubmitQuery} className="shadow-primary">
                    Submit Query
                  </Button>
                  <Button variant="outline" onClick={() => setShowNewQuery(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-4">
            {queries.map((query) => (
              <Card key={query.id} className="shadow-subtle hover:shadow-primary/10 transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{query.title}</h3>
                        <Badge className={getStatusColor(query.status)}>
                          {getStatusIcon(query.status)}
                          <span className="ml-1 capitalize">{query.status}</span>
                        </Badge>
                        <Badge variant="outline">
                          {query.subject}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{query.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Submitted {query.submittedAt}</span>
                        <span>•</span>
                        <span>Assigned to {query.mentor}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {query.status === 'resolved' && (
                        <Button size="sm" className="shadow-primary">
                          View Solution
                        </Button>
                      )}
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

export default Queries;