import React from "react";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

const Scoringbox = () => {
  return (
    <div className="flex space-x-5 mt-8">
      <div className="w-96 h-36 bg-white rounded-xl p-4 shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 bg-[#1A73E8] rounded-xl flex items-center justify-center -mt-8 shadow-lg">
            <LocalPrintshopIcon className="text-white text-2xl" />
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">281</h3>
          </div>
        </div>
         <hr class="border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 my-5" />
        <div className="mt-4 flex items-center">
          <span className="text-green-500 text-sm font-medium">+55%</span>
          <span className="text-gray-500 text-sm ml-1">than last week</span>
        </div>
      </div>
      <div className="w-96 h-36 bg-white rounded-xl p-4 shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 bg-[#ec75d8] rounded-xl flex items-center justify-center -mt-8 shadow-lg">
            <LocalPrintshopIcon className="text-white text-2xl" />
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">281</h3>
          </div>
        </div>
         <hr class="border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 my-5" />
        <div className="mt-4 flex items-center">
          <span className="text-green-500 text-sm font-medium">+55%</span>
          <span className="text-gray-500 text-sm ml-1">than last week</span>
        </div>
      </div>
      <div className="w-96 h-36 bg-white rounded-xl p-4 shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 bg-[#6ee6aa] rounded-xl flex items-center justify-center -mt-8 shadow-lg">
            <LocalPrintshopIcon className="text-white text-2xl" />
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">281</h3>
          </div>
        </div>
         <hr class="border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 my-5" />
        <div className="mt-4 flex items-center">
          <span className="text-green-500 text-sm font-medium">+55%</span>
          <span className="text-gray-500 text-sm ml-1">than last week</span>
        </div>
      </div>
      <div className="w-96 h-36 bg-white rounded-xl p-4 shadow-md">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 bg-[#e9528c] rounded-xl flex items-center justify-center -mt-8 shadow-lg">
            <LocalPrintshopIcon className="text-white text-2xl" />
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">281</h3>
          </div>
        </div>
         <hr class="border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 my-5" />
        <div className="mt-4 flex items-center">
          <span className="text-green-500 text-sm font-medium">+55%</span>
          <span className="text-gray-500 text-sm ml-1">than last week</span>
        </div>
      </div>
    </div>
  );
};

export default Scoringbox;
