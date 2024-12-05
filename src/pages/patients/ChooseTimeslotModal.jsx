import React, { useState } from "react";

const ChooseTimeslotModal = ({ isOpen, onClose, onApply }) => {
  const [selectedTimeslot, setSelectedTimeslot] = useState({
    date: "",
    timeFrom: "",
    timeTo: "",
  });

  const handleTimeslotSelection = (date, timeFrom, timeTo) => {
    setSelectedTimeslot({ date, timeFrom, timeTo });
  };

  const handleApply = () => {
    if (selectedTimeslot.date && selectedTimeslot.timeFrom && selectedTimeslot.timeTo) {
      onApply(selectedTimeslot.date, selectedTimeslot.timeFrom, selectedTimeslot.timeTo);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Available Time Slots</h2>
        <ul className="space-y-2">
          {[
            { date: "2024-12-04", timeFrom: "09:00", timeTo: "10:00" },
            { date: "2024-12-04", timeFrom: "11:00", timeTo: "12:00" },
            { date: "2024-12-06", timeFrom: "14:00", timeTo: "15:00" },
          ].map((slot, index) => (
            <li
              key={index}
              className={`border rounded-md p-2 cursor-pointer ${
                selectedTimeslot.timeFrom === slot.timeFrom
                  ? "bg-[#186F65] text-white"
                  : ""
              }`}
              onClick={() => handleTimeslotSelection(slot.date, slot.timeFrom, slot.timeTo)}
            >
              {slot.date} - {slot.timeFrom} to {slot.timeTo}
            </li>
          ))}
        </ul>
        <button
          onClick={handleApply}
          className="mt-4 w-full bg-[#186F65] text-white py-2 rounded-md hover:bg-[#145e55] transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ChooseTimeslotModal;
