
import { ChevronDown, Home, Star } from "lucide-react";

const Navigation = () => {
  return (
    <div className="fixed top-16 left-14 right-0 bg-[#222222] h-12 flex items-center px-2 z-10 overflow-x-auto">
      <div className="flex items-center space-x-1">
        <NavItem icon={<Home size={16} />} text="Mi poliformaT" />
        <NavItem icon={<Star size={16} />} text="D.A. Fac. Ade" />
        <NavItem icon={<Star size={16} />} text="2024-CFS 2024-25" />
        <NavItem icon={<Star size={16} />} text="Dirección de Producción y Operaciones TIT-158 (DTU)" />
        <NavItem icon={<Star size={16} />} text="Econometría" active />
        <NavItem icon={<Star size={16} />} text="Edo" />
        <NavItem icon={<Star size={16} />} text="Macrii" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active = false }) => {
  return (
    <div className={`flex items-center space-x-1 rounded-3xl px-3 py-1 text-sm whitespace-nowrap h-8 ${active ? 'bg-red-600 text-white' : 'bg-[#333333] text-white hover:bg-[#444444]'}`}>
      {icon}
      <span>{text}</span>
      <ChevronDown size={12} />
    </div>
  );
};

export default Navigation;
