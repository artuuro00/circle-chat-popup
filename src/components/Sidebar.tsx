
import { Home, FileText, Monitor, CheckSquare, BarChart2, Settings, MessageCircle, Calendar, Hash } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon active">
        <Hash size={20} />
      </div>
      <div className="sidebar-icon">
        <Home size={20} />
      </div>
      <div className="sidebar-icon">
        <FileText size={20} />
      </div>
      <div className="sidebar-icon">
        <Monitor size={20} />
      </div>
      <div className="sidebar-icon">
        <CheckSquare size={20} />
      </div>
      <div className="sidebar-icon">
        <BarChart2 size={20} />
      </div>
      <div className="sidebar-icon">
        <Calendar size={20} />
      </div>
      <div className="sidebar-icon">
        <MessageCircle size={20} />
      </div>
      <div className="sidebar-icon sidebar-bottom">
        <Settings size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
