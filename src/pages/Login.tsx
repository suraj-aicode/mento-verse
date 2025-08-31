import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, User, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId && password) {
      toast({
        title: "Login Successful",
        description: "Welcome to Mentor Meeting Platform",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter valid student ID and password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Mentor Meeting Platform</h1>
          <p className="text-white/80">Connect with your mentors seamlessly</p>
        </div>

        <Card className="shadow-primary border-0">
          <CardHeader className="text-center">
            <CardTitle>Student Login</CardTitle>
            <CardDescription>Enter your student credentials to access the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="studentId"
                    type="text"
                    placeholder="Enter your student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full shadow-primary">
                Sign In to Platform
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            Need help? Contact your college administration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;