
import { ChevronDown, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 right-0 h-16 flex items-center px-4 z-20">
      <div className="flex items-center space-x-4">
        <img 
          src="/lovable-uploads/a0f94bd0-b5f4-4c4b-ac06-d81fb41a17f9.png" 
          alt="UPV Logo" 
          className="university-logo h-11"
        />
        <div className="text-lg font-semibold flex items-center">
          <span className="text-muted-foreground">poli</span>
          <span className="text-red-600">[forma</span>
          <span className="text-red-600">T]</span>
        </div>
      </div>

      <div className="ml-auto flex items-center space-x-3">
        <div className="relative">
          <Bell size={20} />
          <span className="notification-badge">17</span>
        </div>
        <div className="flex items-center">
          <div className="text-sm font-medium">Arturo</div>
          <ChevronDown size={14} className="ml-1" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
