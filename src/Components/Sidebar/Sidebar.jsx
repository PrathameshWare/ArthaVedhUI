import React, { useState } from "react";
import Logo from "../../assets/ArthaPATH-Logo.png";
import name from "../../assets/ArthaPATH-Name-v01.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle submenu to show other options
  const toggleSubMenu = () => {
    setIsReferenceOpen(!isReferenceOpen);
  };

  return (
    <div
      className={`h-auto ${
        isExpanded ? "w-80  p-5" : "w-20"
      } bg-[#2d3e50] text-gray-400 transition-all duration-300`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <img
        className={` ${isExpanded ? "w-48 mb-auto" : "w-15 p-2"}`}
        src={Logo}
        alt="Logo"
      />
      <img
        className={` ${isExpanded ? "w-48 mb-auto" : "w-15 mb-10"}`}
        src={name}
        alt="Logo"
      />
      <ul className="space-y-4">
        <li className="cursor-pointer flex items-center hover:text-white font-bold text-xl">
          <AiOutlineDashboard
            className={`${
              isExpanded ? "mr-2 text-2xl" : "mt-16 mb-2 ml-5 text-3xl"
            }`}
          />
          {isExpanded && "Dashboard"}
        </li>
        <li className="cursor-pointer ">
          <div
            onClick={toggleSubMenu}
            className="flex justify-between items-center"
          >
            <span className="font-bold flex items-center hover:text-white text-xl">
              <FaDatabase
                className={`${
                  isExpanded ? "mr-2 text-2xl" : "ml-5 mb-2 text-3xl"
                }`}
              />
              {isExpanded && "Reference Data"}
            </span>
          </div>

          {/* Submenu */}
          {isReferenceOpen && (
            <ul className="mt-2 pl-10 space-y-2">
              <Link
                to="/view-customer"
                className="cursor-pointer flex items-center font-bold text-xl hover:text-white"
              >
                <FaPeopleGroup className="mr-2 text-2xl" />
                {isExpanded && "Customers"}
              </Link>
              <Link
                to="/view-account"
                className="cursor-pointer flex items-center font-bold text-xl hover:text-white"
              >
                <MdManageAccounts className="mr-2 text-2xl" />
                {isExpanded && "Accounts"}
              </Link>
              <Link
                to="/view-transport"
                className="cursor-pointer flex items-center font-bold text-xl hover:text-white"
              >
                <FaTruck className="mr-2 text-2xl" />
                {isExpanded && "Transports"}
              </Link>
            </ul>
          )}
        </li>

        <li className="cursor-pointer flex items-center hover:text-white font-bold text-xl">
          <TbReportSearch
            className={`${isExpanded ? "mr-2 text-2xl" : "ml-5 mb-2 text-3xl"}`}
          />
          {isExpanded && "Reports"}
        </li>
        <li className="cursor-pointer flex items-center hover:text-white font-bold text-xl">
          <IoSettingsOutline
            className={`${isExpanded ? "mr-2 text-2xl" : "ml-5 mb-2 text-3xl"}`}
          />
          {isExpanded && "Settings"}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
