
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 right-0 h-16 flex items-center px-4 z-10">
      <div className="flex items-center space-x-4">
        <img 
          src="https://www.upv.es/firma-e/asignatura/xupv-fondoblanco.png" 
          alt="UPV Logo" 
          className="university-logo"
        />
        <div className="text-lg font-semibold flex items-center">
          <span className="text-muted-foreground">poli</span>
          <span className="text-primary">[forma</span>
          <span className="text-primary">T]</span>
        </div>
      </div>

      <div className="ml-auto flex items-center space-x-3">
        <div className="relative">
          <Bell size={20} />
          <span className="notification-badge">17</span>
        </div>
        <div className="text-sm">Arturo</div>
      </div>
    </nav>
  );
};

export default Navbar;
