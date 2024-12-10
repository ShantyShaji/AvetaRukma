import React, { useState } from "react";
import DoctorSidebar from "../../Components/Sidebars/DoctorSidebar";
import { RiEyeFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

const Appointments = () => {
    const [formData, setFormData] = useState({
        firstName: "DR. Preetha ",
        lastName: "P R",
        profilePic: "/doctor_pic.svg",
        qualification:
            "Obstetrics & Gynecology MBBS,. MS (OBG), DNB (OBG), MICOG, FMAS | Fellowship in Clinical Embryology (CMC, Vellore)",
    });

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

    const [searchTerm, setSearchTerm] = useState("");
    const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
    const [showFilterModal, setShowFilterModal] = useState(false);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredAppointments = appointments.filter((appointment) => {
        const matchesSearch =
            appointment.patientName.toLowerCase().includes(searchTerm);
        const matchesDateRange =
            (!dateRange.startDate ||
                new Date(appointment.date) >= new Date(dateRange.startDate)) &&
            (!dateRange.endDate ||
                new Date(appointment.date) <= new Date(dateRange.endDate));
        return matchesSearch && matchesDateRange;
    });

    const applyDateFilter = () => {
        setShowFilterModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 overflow-y-scroll no-scrollbar">
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

                    {/* Search and Filter */}
                    <div className="flex justify-between items-center mb-4">
                        {/* Search Bar */}
                        <div className="relative w-full lg:w-1/3">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                <AiOutlineSearch size={20} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search by patient name"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full p-2 pl-10 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Filter Button */}
                        <button
                            onClick={() => setShowFilterModal(true)}
                            className="bg-black text-white px-4 py-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800"
                        >
                            By Date
                            <FiFilter size={20} />
                        </button>
                    </div>

                    {/* Filter Modal */}
                    {showFilterModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white p-6 rounded-md shadow-md w-1/3">
                                <h2 className="text-xl font-bold mb-4">Filter by Date Range</h2>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Start Date</label>
                                    <input
                                        type="date"
                                        value={dateRange.startDate}
                                        onChange={(e) =>
                                            setDateRange({ ...dateRange, startDate: e.target.value })
                                        }
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">End Date</label>
                                    <input
                                        type="date"
                                        value={dateRange.endDate}
                                        onChange={(e) =>
                                            setDateRange({ ...dateRange, endDate: e.target.value })
                                        }
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={() => setShowFilterModal(false)}
                                        className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={applyDateFilter}
                                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-black"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Appointments Table */}
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
                                {filteredAppointments.map((appointment, index) => (
                                    <tr
                                        key={appointment.id}
                                        className={`border-b border-black ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
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
                                                className={`px-3 py-1 rounded-full ${appointment.status === "Upcoming"
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
                                                            className={`w-28 h-7 rounded-full text-sm ${action === "Reschedule"
                                                                    ? "bg-[#D1C3EB] text-black"
                                                                    : "bg-red-100 text-red-700"
                                                                }`}
                                                            onClick={() =>
                                                                console.log(`${action} for ${appointment.id}`)
                                                            }
                                                        >
                                                            {action}
                                                        </button>
                                                    ))}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <RiEyeFill
                                                className="text-gray-700 cursor-pointer"
                                                size={20}
                                                onClick={() =>
                                                    console.log(`Viewing details for ${appointment.id}`)
                                                }
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
