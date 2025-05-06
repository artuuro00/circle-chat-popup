
import { Home, FileText, Monitor, CheckSquare, BarChart2, Settings, MessageCircle, Calendar, Hash } from "lucide-react";

const Sidebar = () => {
  const icons = [
    { icon: Hash, isActive: true, color: 'text-red-600' },
    { icon: Home, isActive: false },
    { icon: FileText, isActive: false },
    { icon: Monitor, isActive: false },
    { icon: CheckSquare, isActive: false },
    { icon: BarChart2, isActive: false },
    { icon: Calendar, isActive: false },
    { icon: MessageCircle, isActive: false },
    { icon: Settings, isActive: false }
  ];

  return (
    <div className="sidebar">
      {icons.map((item, index) => (
        <div key={index} className={`sidebar-icon ${item.color || ''}`}>
          <item.icon size={20} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
