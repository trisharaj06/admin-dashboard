import { useState } from "react";
// import AllImages from "../constants/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="w-full bg-white shadow p-4 sticky top-0 z-10">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="flex items-center space-x-6">
          <button onClick={toggleDropdown} className="flex items-center space-x-2">
            <span className="font-medium">
              {/* <AllImages.user /> */}
            </span>
            <span className="hidden md:block font-medium">John Richard</span>
            <span className="font-medium">{/* Add dropdown arrow icon */}</span>
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