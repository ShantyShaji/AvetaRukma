// AppointmentDetailsModal.js
import React from "react";

const AppointmentDetailsModal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] sm:w-[50%] p-6">
        <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
          <p><strong>Consultation Fees:</strong> ₹1000</p>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-[#186F65] text-white rounded-md hover:bg-[#145e55] transition"
            onClick={() => alert("Payment Successful!")}
          >
            Make Payment
          </button>
          <button
            className="px-4 py-2 border border-gray-500 text-gray-700 rounded-md hover:bg-gray-100 transition"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsModal;
