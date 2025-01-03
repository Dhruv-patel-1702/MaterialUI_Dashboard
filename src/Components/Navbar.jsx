import React from "react";
import Homeicon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <div className="h-[8%] bg-[#ecf8f7] mt-3 rounded-lg flex items-center px-5 mx-5">
      <div className="text-[#344767]">
        <Homeicon />
        <span> / Dashboard</span>
        <div className="font-semibold ">Dashboard</div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="flex items-center bg-white/40 rounded-lg px-3 py-2 border-gray-400 border-2">
          <SearchIcon className="text-gray-600 text-xl" />
          <input
            type="text"
            placeholder="Search here"
            className="bg-transparent outline-none ml-2 text-gray-600 w-44"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            <SettingsIcon />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <NotificationsIcon />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <PersonIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
