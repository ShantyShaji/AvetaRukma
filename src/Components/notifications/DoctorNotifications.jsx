import React, { useState } from "react";
import PatientSidebar from "../../components/sidebars/PatientSidebar/";

const NotificationCard = ({ bgColor, message }) => (
    <div
      className={`flex items-start sm:items-center gap-4 p-4 rounded-md ${bgColor} text-gray-800`}
    >
      <span className="text-2xl text-orange-500 transform rotate-45">🔔</span>
      <p className="text-sm">{message}</p>
    </div>
  );
const DoctorNotifications = () => {
  const [formData, setFormData] = useState({
    firstName: "Richard",
    lastName: "Philip",
    email: "RichardPhilip@gmail.com",
    gender: "Male",
    age: 25,
    phoneNumber: "9876543210",
    bloodGroup: "A+",
    treatment: "",
    notes: "",
    profilePic: "/profile.svg",
  });

  const notifications = [
    {
      id: 1,
      bgColor: "bg-teal-100",
      message:
        "New appointment scheduled with Maira on 23/11/2024 at 09.00am.",
    },
    {
      id: 2,
      bgColor: "bg-orange-100",
      message: "Reminder: Consultation with Sheetal starts in 15 minutes.",
    },
    {
      id: 3,
      bgColor: "bg-teal-100",
      message:
        "Rescheduled appointment: Maya is now booked for 01/12/2024 at 2.30pm.",
    },
    {
      id: 4,
      bgColor: "bg-orange-100",
      message:
        "New patient registration: Christina, Age: 27, Consultation Type: video.",
    },
    {
      id: 5,
      bgColor: "bg-teal-100",
      message: "You have 3 unread messages from patients.",
    },
  ];
 

  return (
    <div className="min-h-screen bg-gray-100 overflow-y-scroll no-scrollbar">
      <div className="flex">
        {/* Sidebar Component */}
        <PatientSidebar
          firstName={formData.firstName}
          lastName={formData.lastName}
          profilePic={formData.profilePic}
        />

        {/* Main Content */}
        <main className="w-full lg:w-5/6 bg-white p-6 lg:p-8 ml-0 lg:ml-60">
          <h1 className="text-2xl font-bold mb-6 mt-14 lg:mt-10">
            Notifications
          </h1>

          {/* Availability Buttons */}
          <div className="w-full mx-auto mt-8 space-y-4">
      <div className="flex justify-end items-center mb-4">
        
        <button className="text-teal-700 text-sm underline">
          Clear all
        </button>
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            bgColor={notification.bgColor}
            message={notification.message}
          />
        ))}
      </div>
    </div>

    
        </main>
      </div>

      {/* Modals */}
     
    </div>
  );
};

export default DoctorNotifications;
