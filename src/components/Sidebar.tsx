
import { Home, FileText, Monitor, CheckSquare, BarChart2, Settings, MessageCircle, Calendar, Hash } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon active">
        <Hash size={24} />
      </div>
      <div className="sidebar-icon">
        <Home size={24} />
      </div>
      <div className="sidebar-icon">
        <FileText size={24} />
      </div>
      <div className="sidebar-icon">
        <Monitor size={24} />
      </div>
      <div className="sidebar-icon">
        <CheckSquare size={24} />
      </div>
      <div className="sidebar-icon">
        <BarChart2 size={24} />
      </div>
      <div className="sidebar-icon">
        <Calendar size={24} />
      </div>
      <div className="sidebar-icon">
        <MessageCircle size={24} />
      </div>
      <div className="sidebar-icon sidebar-bottom">
        <Settings size={24} />
      </div>
    </div>
  );
};

export default Sidebar;
