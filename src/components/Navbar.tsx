
import { ChevronDown, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 right-0 h-16 flex items-center px-4 z-20 bg-[#1A1A1A] border-b border-[#2C2C2C]">
      <div className="flex items-center space-x-2">
        <img 
          src="/lovable-uploads/3ee6e8b0-18c6-4086-a5d4-ba372ef09d85.png" 
          alt="UPV Logo" 
          className="h-10 mr-2"
        />
        <div className="text-lg font-semibold flex items-center">
          <span className="text-muted-foreground">poli</span>
          <span className="text-red-600">[forma</span>
          <span className="text-red-600">T]</span>
        </div>
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <div className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold">17</span>
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
