import React from "react";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

const Scoringbox = () => {
  return (
    <div className="flex space-x-5 mt-10">
      <div className="w-96 h-28 bg-white rounded-xl p-4 shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-[#1A73E8] rounded-xl flex items-center justify-center -mt-8 shadow-lg">
            <LocalPrintshopIcon className="text-white text-2xl" />
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">281</h3>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-green-500 text-sm font-medium">+55%</span>
          <span className="text-gray-500 text-sm ml-1">than last week</span>
        </div>
      </div>
      <div className="w-96 h-28 bg-white rounded-xl p-4 shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-[#f34bb3] rounded-xl flex items-center justify-center -mt-8 shadow-lg">
            <LocalPrintshopIcon className="text-white text-2xl" />
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">281</h3>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-green-500 text-sm font-medium">+55%</span>
          <span className="text-gray-500 text-sm ml-1">than last week</span>
        </div>
      </div>
      <div className="w-96 h-28 bg-white rounded-xl p-4 shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-[#71ee90] rounded-xl flex items-center justify-center -mt-8 shadow-lg">
            <LocalPrintshopIcon className="text-white text-2xl" />
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">281</h3>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-green-500 text-sm font-medium">+55%</span>
          <span className="text-gray-500 text-sm ml-1">than last week</span>
        </div>
      </div>
      <div className="w-96 h-28 bg-white rounded-xl p-4 shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-[#6fe1e9] rounded-xl flex items-center justify-center -mt-8 shadow-lg">
            <LocalPrintshopIcon className="text-white text-2xl" />
          </div>
          <div className="text-right">  
            <p className="text-gray-500 text-sm">Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">281</h3>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-green-500 text-sm font-medium">+55%</span>
          <span className="text-gray-500 text-sm ml-1">than last week</span>
        </div>
      </div>
    </div>
  );
};

export default Scoringbox;
