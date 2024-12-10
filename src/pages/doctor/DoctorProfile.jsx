// Profile.js
import React, { useState } from "react";
import DoctorSidebar from "../../Components/Sidebars/DoctorSidebar";
import AboutMe from "./AboutMe";
 

const DoctorProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "DR. Preetha ",
    lastName: "P R",
    profilePic: "/doctor_pic.svg",
    qualification:"Obstetrics & Gynecology MBBS,. MS (OBG), DNB (OBG), MICOG, FMAS | Fellowship in Clinical Embryology (CMC, Vellore) ",
  });
  const [activeTab, setActiveTab] = useState("aboutme");

  const handleFormDataChange = (updatedData) => {
    setFormData(updatedData);
  };
  return (
    <div className="min-h-screen bg-gray-100 overflow-y-scroll no-scrollbar"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="flex">
        {/* Sidebar Component */}
        <DoctorSidebar
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
              {formData.qualification.split('.').map((sentence, index) => (
  <p key={index}>{sentence.trim()}</p>
))}

            </div>
          </div>

          <div className="flex space-x-10 border-b-2 mb-6">
            <button
              onClick={() => setActiveTab("aboutme")}
              className={`text-gray-500 text-sm md:text-lg border-b-[6px] rounded-[3px] ${activeTab === "aboutme" ? "border-[#186F65] text-[#186F65] " : "text-gray-500 border-none"}`}
            >
              About Me
            </button>
            
            
          </div>

          {/* Render active tab component */}
          {activeTab === "aboutme" && (
             <AboutMe
             formData={formData}
             onFormDataChange={handleFormDataChange}
             
           />
          )}
          {/* {activeTab === "health" && <HealthInformation
          formData={formData}
          onFormDataChange={handleFormDataChange} />}
          {activeTab === "medical" && <MedicalHistory />} */}
        </main>
      </div>
    </div>
  );
};

export default DoctorProfile;

 