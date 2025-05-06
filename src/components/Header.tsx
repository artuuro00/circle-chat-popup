
import { Hash } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-28 left-14 right-0 bg-background px-6 py-2 z-10">
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <img src="/lovable-uploads/56a1af5d-2ce5-48dd-8b0a-9b91caf71486.png" alt="Inicio" className="w-6 h-6" />
          </div>
        </div>
        <div className="text-lg font-bold">INICIO</div>
      </div>
    </div>
  );
};

export default Header;
