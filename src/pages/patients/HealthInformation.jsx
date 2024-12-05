import React, { useState, useEffect } from "react";

const HealthInformation = ({ formData, onFormDataChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localFormData, setLocalFormData] = useState(formData);  // Initialize localFormData state

  // Ensure localFormData updates when formData prop changes
  useEffect(() => {
    setLocalFormData(formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setLocalFormData(formData);
    setIsEditing(false);
  };

  const handleSave = () => {
    onFormDataChange(localFormData);  // Pass updated formData to parent
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">Health Information</h3>
        {!isEditing && (
          <button
            onClick={handleEditToggle}
            className="text-sm underline text-green-700"
          >
            Edit
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blood Group */}
        <div>
          <label className="block text-sm font-medium mb-1">Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={localFormData.bloodGroup}
            disabled={!isEditing}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${isEditing ? "border-gray-400" : "bg-gray-100"}`}
          />
        </div>

        {/* Primary Reason for Consultation */}
        <div>
          <label className="block text-sm font-medium mb-1">Primary Reason for Consultation</label>
          <input
            type="text"
            name="primaryReason"
            value={localFormData.primaryReason}
            disabled={!isEditing}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${isEditing ? "border-gray-400" : "bg-gray-100"}`}
          />
        </div>

        {/* Allergies */}
        <div>
          <label className="block text-sm font-medium mb-1">Allergies</label>
          <input
            type="text"
            name="allergies"
            value={localFormData.allergies}
            disabled={!isEditing}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${isEditing ? "border-gray-400" : "bg-gray-100"}`}
          />
        </div>

        {/* Current Medications */}
        <div>
          <label className="block text-sm font-medium mb-1">Current Medications</label>
          <input
            type="text"
            name="currentMedications"
            value={localFormData.currentMedications}
            disabled={!isEditing}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${isEditing ? "border-gray-400" : "bg-gray-100"}`}
          />
        </div>

        {/* Chronic Conditions */}
        <div>
          <label className="block text-sm font-medium mb-1">Chronic Conditions</label>
          <input
            type="text"
            name="chronicConditions"
            value={localFormData.chronicConditions}
            disabled={!isEditing}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-md ${isEditing ? "border-gray-400" : "bg-gray-100"}`}
          />
        </div>
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

export default HealthInformation;
