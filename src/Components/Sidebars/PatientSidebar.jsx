import React, { useState } from "react";
import { IoLogOutSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { PiVideoConferenceFill } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const PatientSidebar = ({ firstName, lastName, profilePic }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();  // Get the current route

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Close the sidebar after navigation (optional)
  };

  const getLinkClass = (path) => {
    // Apply white color if the item is active, dim color otherwise
    return location.pathname === path
      ? "flex items-center justify-center gap-3 text-[1.05rem] cursor-pointer text-white"
      : "flex items-center justify-center gap-3 text-[1.05rem] cursor-pointer text-gray-400";
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#186F65] text-white rounded-full focus:outline-none"
      >
        {isSidebarOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
      </button>

      <aside
        className={`fixed top-0 left-0 w-3/4 sm:w-[300px] lg:w-[250px] bg-[#186F65] text-white p-6 min-h-screen rounded-r-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <img src="/aveta_logo.svg" alt="Logo" className="mx-auto mb-5" />
        <div className="relative flex items-center justify-end gap-3 mb-5">
        {/* <IoMdNotifications
  className={`text-3xl lg:text-4xl transform rotate-30 ${getLinkClass("/notifications/PatientNotifications")}`}
  onClick={() => handleNavigation("/notifications/PatientNotifications")}
/> */}
          <IoMdNotifications className="text-3xl lg:text-4xl transform rotate-30"  onClick={() => handleNavigation("/notifications/PatientNotifications")}
           />
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            5
          </span>
        </div>

        <div className="text-center mb-8">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-5"
          />
          <p className="mb-2 text-sm">Welcome Back!</p>
          <h3 className="font-bold text-xl mb-1">
            {firstName} {lastName}
          </h3>
          <div className="flex items-center justify-center text-lg mb-1">
            <IoLogOutSharp />
            <button className="ml-2"></button>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col items-start justify-center gap-4 mt-16">
            <li
              className={getLinkClass("/patients/Profile")}
              onClick={() => handleNavigation("/patients/Profile")}
            >
              <CgProfile className="text-lg" />
              Profile
            </li>
            <li
              className={getLinkClass("/patients/BookAppointment")}
              onClick={() => handleNavigation("/patients/BookAppointment")}
            >
              <LuBookOpenCheck className="text-lg" />
              Book Appointment
            </li>
            <li
              className={getLinkClass("/patients/MyAppointments")}
              onClick={() => handleNavigation("/patients/MyAppointments")}
            >
              <MdDateRange className="text-lg" />
              My Appointments
            </li>
            <li
              className={getLinkClass("/patients/ConsultationRoom")}
              onClick={() => handleNavigation("/patients/ConsultationRoom")}
            >
              <PiVideoConferenceFill className="text-lg" />
              Consultation Room
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default PatientSidebar;
