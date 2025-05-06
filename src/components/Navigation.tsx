
import { ChevronDown, Star, Home } from "lucide-react";

const Navigation = () => {
  return (
    <div className="fixed top-16 left-14 right-0 bg-secondary h-10 flex items-center px-2 overflow-x-auto z-10">
      <div className="pill-button mr-2">
        <Home size={16} />
        <span>Mi poliformaT</span>
        <ChevronDown size={14} />
      </div>
      <div className="pill-button mr-2">
        <Star size={16} />
        <span>D.A. Fac. Ade</span>
        <ChevronDown size={14} />
      </div>
      <div className="pill-button mr-2">
        <Star size={16} />
        <span>2024-CFS 2024-25</span>
        <ChevronDown size={14} />
      </div>
      <div className="accent-pill mr-2">
        <Star size={16} />
        <span>Dirección de Producción y Operaciones TIT-158 (DTU)</span>
        <ChevronDown size={14} />
      </div>
      <div className="pill-button mr-2">
        <Star size={16} />
        <span>Econometría</span>
        <ChevronDown size={14} />
      </div>
      <div className="pill-button mr-2">
        <Star size={16} />
        <span>Edo</span>
        <ChevronDown size={14} />
      </div>
      <div className="pill-button mr-2">
        <Star size={16} />
        <span>Macrii</span>
        <ChevronDown size={14} />
      </div>
    </div>
  );
};

export default Navigation;
