// import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import AllImages from "../constants/image"; 

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const sidebarItems = [
    { href: "/admin/mentor", label: "Mentor", icon: <AllImages.mentor /> },
    { href: "/admin/job", label: "Job", icon: <AllImages.job /> },
    { href: "/admin/booking", label: "Booking", icon: <AllImages.booking /> },
    { href: "/admin/priority-dm", label: "Priority DM", icon: <AllImages.priorityDM /> },
  ];

  return (
    <aside className={`${isCollapsed ? "w-14" : "w-64"} h-full bg-gray-800 transition-all duration-300`}>
      <button onClick={toggleSidebar} className="absolute -right-2.5 top-0 w-6 h-6 flex justify-center items-center hover:bg-gray-300 rounded-full transition cursor-pointer">
        {/* Add toggle icon */}
      </button>
      <nav className="mt-4">
        <ul>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.href} href={item.href} label={item.label} isCollapsed={isCollapsed} icon={item.icon} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;