import React, { useState } from "react";
import PatientSidebar from "../../components/sidebars/PatientSidebar/";
import AppointmentView from "../../pages/patients/AppointmentView";
import RescheduleModal from "../../pages/patients/RescheduleModal";

const MyAppointments = () => {
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

  const [appointments, setAppointments] = useState([
    {
      id: "AP12345",
      date: "2024-11-25",
      time: "09:00AM - 09:30AM",
      status: "Upcoming",
      actions: ["Reschedule", "Cancel"],
      fullName: "John Doe",
      age: 30,
      gender: "Male",
      treatment: "General Checkup",
      notes: "Patient requires follow-up after 6 months.",
    },
    {
      id: "AP12346",
      date: "2024-11-26",
      time: "10:00AM - 10.30AM",
      status: "Completed",
      actions: ["View", "Cancel"],
      fullName: "John Doe",
      age: 30,
      gender: "Male",
      treatment: "General Checkup",
      notes: "Patient requires follow-up after 6 months.",
    },
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);

  const handleActionClick = (action, appointment) => {
    if (action === "View") {
      setSelectedAppointment(appointment);
      setIsModalOpen(true);
    } else if (action === "Reschedule") {
      setSelectedAppointment(appointment);
      setIsRescheduleModalOpen(true);
    }
  };

  const handleReschedule = (updatedAppointment) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appt) =>
        appt.id === updatedAppointment.id
          ? { ...appt, date: updatedAppointment.date, time: updatedAppointment.time }
          : appt
      )
    );
    setIsRescheduleModalOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-gray-100 overflow-y-scroll no-scrollbar"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex">
        <PatientSidebar
          firstName={formData.firstName}
          lastName={formData.lastName}
          profilePic={formData.profilePic}
        />

        <main className="w-full lg:5/6 bg-white p-6 lg:p-8 ml-0 lg:ml-60">
          <h1 className="text-2xl font-bold mb-6 mt-14 lg:mt-10">
            My Appointments
          </h1>
          <div className="bg-white shadow-md border border-black rounded-lg overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-gray-700  border-b border-black">
                <tr>
                  <th className="p-4">Appointment ID</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr
                    key={index}
                    className={`border-b border-black ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4">{appointment.id}</td>
                    <td className="p-4">{appointment.date}</td>
                    <td className="p-4">{appointment.time}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          appointment.status === "Upcoming"
                            ? "bg-[#C4F4E6] text-black"
                            : "bg-[#6C757D] text-white"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="p-4">
        <div className="flex gap-3">
          {appointment.actions
            .filter((action) => action !== "Cancel") // Render non-Cancel actions
            .map((action, idx) => (
              <button
                key={idx}
                className={`w-28 h-7 rounded-full text-sm ${
                  action === "Reschedule"
                    ? "bg-[#D1C3EB] text-black"
                    : action === "View"
                    ? "bg-[#01225B] text-white"
                    : ""
                }`}
                onClick={() => handleActionClick(action, appointment)}
              >
                {action}
              </button>
            ))}
        </div>
      </td>
      {/* New td for the Cancel button */}
      <td className="p-4">
        {appointment.actions.includes("Cancel") && (
          <button
            className="px-4 py-1 rounded-full text-sm bg-red-100 text-red-700"
            onClick={() => handleActionClick("Cancel", appointment)}
          >
            Cancel
          </button>
        )}
      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* View Appointment Modal */}
      {isModalOpen && (
        <AppointmentView
          appointment={selectedAppointment}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Reschedule Modal */}
      {isRescheduleModalOpen && (
        <RescheduleModal
          appointment={selectedAppointment}
          onClose={() => setIsRescheduleModalOpen(false)}
          onReschedule={handleReschedule}
        />
      )}
    </div>
  );
};

export default MyAppointments;
