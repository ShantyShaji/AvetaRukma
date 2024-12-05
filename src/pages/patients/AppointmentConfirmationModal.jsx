import React from "react";

const AppointmentConfirmationModal = ({
  isOpen,
  onClose,
  formData,
  consultationFee,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Appointment Confirmation</h2>
        <ul className="mb-6">
          {Object.entries(formData).map(([key, value]) => (
            <li key={key} className="flex justify-between py-2">
              <span className="font-medium">{key}:</span>
              <span>{value}</span>
            </li>
          ))}
          <li className="flex justify-between py-2">
            <span className="font-medium">Consultation Fee:</span>
            <span>₹{consultationFee}</span>
          </li>
        </ul>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#186F65] text-white rounded-md">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmationModal;
