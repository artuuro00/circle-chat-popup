
import { Hash } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-12 left-14 right-0 bg-background px-6 py-4 flex items-center z-10">
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <div className="bg-red-600 text-white w-7 h-7 flex items-center justify-center">
            <Hash size={16} />
          </div>
          <div className="bg-secondary/70 text-white w-7 h-7 flex items-center justify-center ml-0.5">
            <Hash size={16} />
          </div>
        </div>
        <div className="text-lg font-bold">INICIO</div>
      </div>
    </div>
  );
};

export default Header;
