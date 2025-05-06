
import { Hash } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-28 left-14 right-0 bg-background px-6 py-2 z-10">
      <div className="flex items-center space-x-2">
        <div className="flex items-center h-8">
          <div className="flex items-center justify-center w-8 h-8 mr-2">
            <Hash size={20} className="text-red-500" />
          </div>
          <div className="text-lg font-bold">INICIO</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
