import React, { useState } from "react";
import PatientSidebar from "../../components/sidebars/PatientSidebar/";
import ChatSection from "./ChatSection";
import VideoCallComponent from "./VideoCallComponent";


const ConsultationRoom = () => {
  const [formData, setFormData] = useState({
    firstName: "Richard",
    lastName: "Philip",
    email: "RichardPhilip@gmail.com",
    gender: "Male",
    age: 25,
    phoneNumber: "9876543210",
    bloodGroup: "A+",
    profilePic: "/profile.svg",
  });

  return (
    <div className="min-h-screen bg-gray-100 overflow-y-scroll no-scrollbar"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="flex">
        {/* Sidebar Component */}
        <PatientSidebar
          firstName={formData.firstName}
          lastName={formData.lastName}
          profilePic={formData.profilePic}
        />
 
        {/* Main Content */}
        <main className="w-full lg:5/6 bg-white p-6 lg:p-8 ml-0 lg:ml-60">
          <h1 className="text-2xl font-bold mb-6 mt-14 lg:mt-10">Consultation Room</h1>
          <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Video Section */}
      <div className="w-full lg:w-2/3 bg-white flex items-center justify-center relative">
      <VideoCallComponent />
      </div>

      {/* Chat Section */}
       <ChatSection />
    </div>
        </main>
      </div>
    </div>
  );
};

export default ConsultationRoom;

 