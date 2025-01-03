import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableViewIcon from "@mui/icons-material/TableView";
import PaymentIcon from "@mui/icons-material/Payment";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Sidebar = () => {
  const menuItems = [
    { icon: <DashboardIcon />, text: "Dashboard", isActive: true },
    { icon: <TableViewIcon />, text: "Tables" },
    { icon: <PaymentIcon />, text: "Billing" },
    { icon: <LanguageIcon />, text: "RTL" },
    { icon: <NotificationsIcon />, text: "Notifications" },
    { icon: <PersonIcon />, text: "Profile" },
    { icon: <LoginIcon />, text: "Sign In" },
    { icon: <AssignmentIcon />, text: "Sign Up" },
  ];

  return (
    <div className="w-[270px] h-[97vh] bg-[#28282b] p-4 flex flex-col mt-3 ml-3 rounded-xl">
      <div className="flex items-center gap-3 px-3 mb-6">
        <img src="./assets/logo.svg" alt="logo" className="w-9" />
        <h2 className="text-white/90 text-lg font-medium">Dhruv Patel 1702</h2>
      </div>
      <hr class="border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80" />
      <nav className="flex-1 px-2 mt-5">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.isActive
                    ? "bg-[#1A73E8] text-white"
                    : "text-gray-400 hover:bg-white/10"
                }`}
              >
                <span
                  className={`text-xl ${
                    item.isActive ? "text-white" : "text-current"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="text-sm">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="w-full bg-[#1A73E8] text-white py-3 rounded-lg font-medium hover:bg-[#1557b0] transition-colors mt-4">
        UPGRADE TO PRO
      </button>
    </div>
  );
};

export default Sidebar;
