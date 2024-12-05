import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RescheduleModal = ({ appointment, onClose, onReschedule }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "09:00 AM - 09:30 AM",
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "02:00 PM - 02:30 PM",
    "03:00 PM - 03:30 PM",
  ]; // Replace with dynamically fetched availability if required

  const handleReschedule = () => {
    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }

    onReschedule({
      id: appointment.id,
      date: selectedDate.toISOString().split("T")[0], // Format as yyyy-mm-dd
      time: selectedTime,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Reschedule Appointment
        </h2>

        <div>
          <p>
            <strong>Appointment ID:</strong> {appointment.id}
          </p>
          <div className="mt-4">
            <label className="block font-medium mb-2">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()} // Prevent selecting past dates
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-2">Select Time Slot</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full"
            >
              <option value="" disabled>
                -- Choose a time slot --
              </option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-4 py-2 border border-black text-black rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#186F65] text-white rounded-lg"
            onClick={handleReschedule}
          >
            Confirm Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
