
import { FileText, BookOpen, Briefcase, CheckSquare, Settings, BarChart2, Calendar, MessageCircle, Hash, AlertCircle, Volume2, ChevronRight } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon text-red-600">
        <img 
          src="/lovable-uploads/5c112b1b-0a65-499e-a408-54bfd99f26e5.png" 
          alt="Logo" 
          className="w-7 h-7"
        />
      </div>
      <div className="sidebar-icon">
        <AlertCircle size={20} />
      </div>
      <div className="sidebar-icon">
        <Briefcase size={20} />
      </div>
      <div className="sidebar-icon">
        <BookOpen size={20} />
      </div>
      <div className="sidebar-icon">
        <BookOpen size={20} />
      </div>
      <div className="sidebar-icon">
        <BookOpen size={20} />
      </div>
      <div className="sidebar-icon">
        <FileText size={20} />
      </div>
      <div className="sidebar-icon">
        <CheckSquare size={20} />
      </div>
      <div className="sidebar-icon">
        <Settings size={20} />
      </div>
      <div className="sidebar-icon">
        <BarChart2 size={20} />
      </div>
      <div className="sidebar-icon">
        <Calendar size={20} />
      </div>
      <div className="sidebar-icon">
        <Volume2 size={20} />
      </div>
      <div className="sidebar-icon">
        <MessageCircle size={20} />
      </div>
      <div className="sidebar-icon">
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
