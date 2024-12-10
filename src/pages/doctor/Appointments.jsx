 // Appointments.js
import React, { useState } from "react";
import DoctorSidebar from "../../Components/Sidebars/DoctorSidebar";
import { RiEyeFill } from "react-icons/ri";

const Appointments = () => {
  const [formData, setFormData] = useState({
    firstName: "DR. Preetha ",
    lastName: "P R",
    profilePic: "/doctor_pic.svg",
    qualification:
      "Obstetrics & Gynecology MBBS,. MS (OBG), DNB (OBG), MICOG, FMAS | Fellowship in Clinical Embryology (CMC, Vellore)",
  });

  const handleFormDataChange = (updatedData) => {
    setFormData(updatedData);
  };

  const [appointments, setAppointments] = useState([
    {
      id: "AP12345",
      patientName: "Denil Shoji",
      age: 32,
      gender: "Male",
      phone: "9874563210",
      date: "2024-11-25",
      time: "09:00AM - 09:30AM",
      status: "Upcoming",
      diagnosis: "Thyroid",
      actions: ["Cancel"],
    },
    {
      id: "AP12346",
      patientName: "Maria Mathew",
      age: 27,
      gender: "Female",
      phone: "9874563210",
      date: "2024-11-25",
      time: "09:00AM - 09:30AM",
      status: "Upcoming",
      diagnosis: "PCOS",
      actions: ["Cancel"],
    },
    {
      id: "AP12347",
      patientName: "Geoerge",
      age: 32,
      gender: "Male",
      phone: "9874563210",
      date: "2024-11-25",
      time: "09:00AM - 09:30AM",
      status: "Rescheduled",
      diagnosis: "varicocele",
      actions: ["Cancel"],
    },
    {
      id: "AP12348",
      patientName: "Kajal Aggarawal",
      age: 30,
      gender: "Female",
      phone: "9874563210",
      date: "2024-11-25",
      time: "09:00AM - 09:30AM",
      status: "Completed",
      diagnosis: "BBT",
      actions: [""],
    },
    {
      id: "AP12349",
      patientName: "Surya Paul",
      age: 32,
      gender: "Male",
      phone: "9874563210",
      date: "2024-11-25",
      time: "09:00AM - 09:30AM",
      status: "Completed",
      diagnosis: "varicocele",
      actions: [""],
    },
  ]);

  const handleActionClick = (action, appointment) => {
    console.log(`Performing ${action} action for appointment ${appointment.id}`);
  };

  const handleViewDetails = (appointment) => {
        console.log(`Viewing details for appointment ${appointment.id}`);
      };
    

  return (
    <div
      className="min-h-screen bg-gray-100 overflow-y-scroll no-scrollbar"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex">
        {/* Sidebar Component */}
        <DoctorSidebar
          firstName={formData.firstName}
          lastName={formData.lastName}
          profilePic={formData.profilePic}
        />

        {/* Main Content */}
        <main className="w-full lg:5/6 bg-white p-6 lg:p-8 ml-0 lg:ml-60">
          <h1 className="text-2xl font-bold mb-6 mt-14 lg:mt-10">Appointments</h1>

          <div className="bg-white shadow-md border border-black rounded-lg overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-200 text-gray-700 border-b border-black">
                <tr>
                  <th className="p-4">Patient Name</th>
                  <th className="p-4">Age</th>
                  <th className="p-4">Gender</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Diagnosis</th>
                  <th className="p-4">Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr
                    key={appointment.id}
                    className={`border-b border-black ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4">{appointment.patientName}</td>
                    <td className="p-4">{appointment.age}</td>
                    <td className="p-4">{appointment.gender}</td>
                    <td className="p-4">{appointment.phone}</td>
                    <td className="p-4">{appointment.date}</td>
                    <td className="p-4">{appointment.time}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          appointment.status === "Upcoming"
                            ? "bg-[#C4F4E6] text-black"
                            : appointment.status === "Rescheduled"
                            ? "bg-[#CAB9E8] text-black"
                            : "bg-[#6C757D] text-white"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="p-4">{appointment.diagnosis}</td>
                    <td className="p-4">
  <div className="flex gap-3">
    {appointment.status !== "Completed" &&
      appointment.actions.map((action, idx) => (
        <button
          key={idx}
          className={`w-28 h-7 rounded-full text-sm ${
            action === "Reschedule"
              ? "bg-[#D1C3EB] text-black"
              : action === "View"
              ? "bg-[#01225B] text-white"
              : "bg-red-100 text-red-700"
          }`}
          onClick={() => handleActionClick(action, appointment)}
        >
          {action}
        </button>
      ))}
  </div>
</td>
<td className="p-4">
{/* Eye Icon for Viewing Details */}
<RiEyeFill
      className="text-gray-700 cursor-pointer"
      size={20}
      onClick={() => handleViewDetails(appointment)}
    />
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Appointments;


 