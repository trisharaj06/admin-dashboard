import { useEffect, useState } from "react";
// import { Bell } from "lucide-react";
// import AllImages from "../constants/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = null;
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef && !dropdownRef.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="w-full bg-white shadow p-4 sticky top-0 z-10">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="flex items-center space-x-6" ref={dropdownRef}>

           {/* Notification Icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
            {/* <Bell size={20} className="text-gray-600" /> */}
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          <button onClick={toggleDropdown} className="flex items-center gap-3 hover:bg-gray-100 px-3 py-1 rounded-lg transition ">
            <img
              src="https://i.pravatar.cc/40?img=32"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-light hidden md:block ">Jimmy</span>
            <span className="font-medium"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>

          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-white shadow-md rounded-md z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;