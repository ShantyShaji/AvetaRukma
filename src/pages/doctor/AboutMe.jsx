import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const AboutMe = ({ formData, onFormDataChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localFormData, setLocalFormData] = useState(formData);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setLocalFormData(formData);
    // setProfilePic(formData.profilePic || "/profile.svg"); // Reset to original profile picture
    setIsEditing(false);
  };

  const handleSave = () => {
    onFormDataChange({ ...localFormData }); // Save profile picture with other data
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const updatedFormData = {
          ...localFormData,
          profilePic: event.target.result,
        };
        setLocalFormData(updatedFormData);
        onFormDataChange(updatedFormData);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">Personal Information</h3>
        {!isEditing && (
          <button
            onClick={handleEditToggle}
            className="text-sm underline text-green-700"
          >
            Edit
          </button>
        )}
      </div>

      {/* Profile Picture Section */}
      <div className=" w-28 h-28 mb-5">
        <img
          src={localFormData.profilePic}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />

        {isEditing && (
          <label
            htmlFor="profile-pic-upload"
            className="absolute bottom-[0.2rem] lg:bottom-32 xl:bottom-52 left-[7rem] lg:left-[22rem] bg-white p-1 rounded-full cursor-pointer shadow-md"
            title="Change Profile Picture"
          >
            <FaCamera className="text-gray-600" />
          </label>
        )}

        <input
          type="file"
          id="profile-pic-upload"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          disabled={!isEditing}
        />
      </div>

      {/* Personal Information Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={localFormData.firstName}
            disabled={!isEditing}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${isEditing ? "border-gray-400" : "bg-gray-100"}`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={localFormData.lastName}
            disabled={!isEditing}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${isEditing ? "border-gray-400" : "bg-gray-100"}`}
          />
        </div>
        </div>
        <div className="grid grid-cols-1 mt-5">
          <label className="block text-sm font-medium mb-1">Qualification</label>
          <textarea
  name="qualification"
  value={localFormData.qualification}
  disabled={!isEditing}
  onChange={handleInputChange}
  className={`w-full p-2 border rounded-md ${isEditing ? "border-gray-400" : "bg-gray-100"}`}
/>

        </div>
    

      {isEditing && (
        <div className="flex justify-start space-x-4 mt-6">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#186F65] text-white rounded-md"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 border border-black rounded-md"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
