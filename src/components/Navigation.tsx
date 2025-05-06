
import { ChevronDown, Home, Star } from "lucide-react";

const Navigation = () => {
  return (
    <div className="fixed top-16 left-14 right-0 bg-[#2a2a2a] h-12 flex items-center px-2 z-10">
      <div className="nav-pill">
        <Home size={14} />
        <span>Mi poliformaT</span>
        <ChevronDown size={12} />
      </div>
      <div className="nav-pill">
        <Star size={14} />
        <span>D.A. Fac. Ade</span>
        <ChevronDown size={12} />
      </div>
      <div className="nav-pill">
        <Star size={14} />
        <span>2024-CFS 2024-25</span>
        <ChevronDown size={12} />
      </div>
      <div className="nav-pill">
        <Star size={14} />
        <span>Dirección de Producción y Operaciones TIT-158 (DTU)</span>
        <ChevronDown size={12} />
      </div>
      <div className="nav-pill active">
        <Star size={14} />
        <span>Econometría</span>
        <ChevronDown size={12} />
      </div>
      <div className="nav-pill">
        <Star size={14} />
        <span>Edo</span>
        <ChevronDown size={12} />
      </div>
      <div className="nav-pill">
        <Star size={14} />
        <span>Macrii</span>
        <ChevronDown size={12} />
      </div>
    </div>
  );
};

export default Navigation;
