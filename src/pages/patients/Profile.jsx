// Profile.js
import React, { useState } from "react";
import PatientSidebar from "../../components/sidebars/PatientSidebar/";
import PersonalInformation from "./PersonalInformation";
import HealthInformation from "./HealthInformation";
import MedicalHistory from "./MedicalHistory";
import "./profile.css";

const Profile = () => {
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
  const [activeTab, setActiveTab] = useState("personal");

  const handleFormDataChange = (updatedData) => {
    setFormData(updatedData);
  };
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
          <h1 className="text-2xl font-bold mb-6 mt-14 lg:mt-10">Profile</h1>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 mb-6">
            <img
              src={formData.profilePic}
              alt="Profile"
              className="w-[170px] h-[170px] rounded-full object-cover"
            />
            <div className="ml-6">
              <h2 className="text-xl font-bold mb-3">
                {formData.firstName} {formData.lastName}
              </h2>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Gender:</strong> {formData.gender}</p>
              <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
            </div>
          </div>

          <div className="flex space-x-10 border-b-2 mb-6">
            <button
              onClick={() => setActiveTab("personal")}
              className={`text-gray-500 text-sm md:text-lg border-b-[6px] rounded-[3px] ${activeTab === "personal" ? "border-[#186F65] text-[#186F65] " : "text-gray-500 border-none"}`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab("health")}
              className={`text-gray-500 text-sm md:text-lg border-b-[6px] rounded-[3px] ${activeTab === "health" ? "border-[#186F65] text-[#186F65] " : "text-gray-500 border-none"}`}
            >
              Health Information
            </button>
            <button
              onClick={() => setActiveTab("medical")}
              className={`text-gray-500 text-sm md:text-lg border-b-[6px] rounded-[3px] ${activeTab === "medical" ? "border-[#186F65] text-[#186F65] " : "text-gray-500 border-none"}`}
            >
              Medical History
            </button>
          </div>

          {/* Render active tab component */}
          {activeTab === "personal" && (
             <PersonalInformation
             formData={formData}
             onFormDataChange={handleFormDataChange}
             
           />
          )}
          {activeTab === "health" && <HealthInformation
          formData={formData}
          onFormDataChange={handleFormDataChange} />}
          {activeTab === "medical" && <MedicalHistory />}
        </main>
      </div>
    </div>
  );
};

export default Profile;

 