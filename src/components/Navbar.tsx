
import { Bell, ChevronDown, Grid } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/e4c4c78f-35f2-4a8f-ab69-e36bf03ccbec.png" 
          alt="UPV Logo" 
          className="h-8 w-8"
        />
        <div className="text-lg font-semibold text-white">
          Universitat Politècnica de València
        </div>
      </div>
      
      <div className="breadcrumb">
        <div className="breadcrumb-item">
          <span>Mi poliformaT</span>
          <ChevronDown size={14} />
        </div>
        <div className="breadcrumb-item">
          <span>D.A. Fac. Ade</span>
          <ChevronDown size={14} />
        </div>
        <div className="breadcrumb-item">
          <span>2024-CFS 2024-25</span>
          <ChevronDown size={14} />
        </div>
        <div className="breadcrumb-item">
          <span>Dirección de Producción y Operaciones</span>
          <ChevronDown size={14} />
        </div>
        <div className="breadcrumb-item active">
          <span>Econometría</span>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="utilities">
        <div className="notification-container">
          <Bell size={20} />
          <span className="notification-badge">17</span>
        </div>
        <div className="utility-item">
          <Grid size={20} />
        </div>
        <div className="utility-item">
          <div className="font-medium">Arturo</div>
          <ChevronDown size={14} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
