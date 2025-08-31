import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Users,
  MessageSquare,
  BarChart3,
  AlertTriangle,
  FileQuestion,
  GraduationCap,
  LogOut
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Meetings", href: "/meetings", icon: Users },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Queries", href: "/queries", icon: MessageSquare },
  { name: "Attendance", href: "/attendance", icon: BarChart3 },
  { name: "Problems", href: "/problems", icon: FileQuestion },
  { name: "Complaints", href: "/complaints", icon: AlertTriangle },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
    navigate("/");
  };

  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r border-border">
      <div className="flex items-center gap-2 p-6 border-b border-border">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg">Mentor Platform</h1>
          <p className="text-sm text-muted-foreground">Student Portal</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-subtle"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`
            }
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="mb-4 p-3 bg-muted rounded-lg">
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-muted-foreground">ID: CS2024001</p>
        </div>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;