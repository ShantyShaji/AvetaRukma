import React, { useState } from "react";
import PatientSidebar from "../../components/sidebars/PatientSidebar/";
import ChooseTimeslotModal from "../../pages/patients/ChooseTimeslotModal";
import AppointmentConfirmationModal from "./AppointmentConfirmationModal";
import { FaFilter } from "react-icons/fa";

const BookAppointment = () => {
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

  const [isTimeslotModalOpen, setIsTimeslotModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeFrom, setSelectedTimeFrom] = useState("");
  const [selectedTimeTo, setSelectedTimeTo] = useState("");

  const openTimeslotModal = () => setIsTimeslotModalOpen(true);
  const closeTimeslotModal = () => setIsTimeslotModalOpen(false);

  const openConfirmationModal = () => setIsConfirmationModalOpen(true);
  const closeConfirmationModal = () => setIsConfirmationModalOpen(false);

  const handleApplyTimeslot = (date, timeFrom, timeTo) => {
    setSelectedDate(date);
    setSelectedTimeFrom(timeFrom);
    setSelectedTimeTo(timeTo);
    closeTimeslotModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openConfirmationModal();
  };

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
            Book Appointment
          </h1>

          {/* Availability Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-5 lg:gap-0 mb-6">
            <div>
              <p className="mb-3 text-lg font-medium">Choose from Availability</p>
              <div className="flex gap-4">
                {["Mon", "Wed", "Fri", "Sun"].map((day, index) => (
                  <button
                    key={index}
                    onClick={openTimeslotModal}
                    className="px-4 py-2 bg-[#186F65] text-white rounded-lg hover:bg-[#145e55] transition-colors flex flex-col items-center"
                  >
                    <span className="text-lg font-medium">{day}</span>
                    <span className="text-sm">May {11 + index * 2}</span>
                  </button>
                ))}
              </div>
            </div>
            <button className="w-28 h-9 bg-black text-white text-sm rounded-3xl flex items-center justify-center gap-2 px-1">
              <FaFilter />
              This week
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date and Time */}
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                value={selectedDate}
                readOnly
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">From</label>
              <input
                type="time"
                value={selectedTimeFrom}
                readOnly
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">To</label>
              <input
                type="time"
                value={selectedTimeTo}
                readOnly
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Treatment */}
            <div>
              <label className="block text-sm font-medium mb-1">Treatment</label>
              <input
                type="text"
                name="treatment"
                placeholder="Enter treatment details"
                className="w-full px-4 py-2 border rounded-md"
                onChange={handleInputChange}
              />
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Notes</label>
              <textarea
                name="notes"
                placeholder="Describe"
                rows="4"
                className="w-full px-4 py-2 border rounded-md"
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-[#186F65] text-white rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                className="px-6 py-2 border border-gray-500 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Modals */}
      <ChooseTimeslotModal
        isOpen={isTimeslotModalOpen}
        onClose={closeTimeslotModal}
        onApply={handleApplyTimeslot}
      />
      <AppointmentConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        formData={formData}
        consultationFee={500}
      />
    </div>
  );
};

export default BookAppointment;
