// Payments.js
import React, { useState } from "react";
import DoctorSidebar from "../../Components/Sidebars/DoctorSidebar";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

const Payment = () => {
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

    const [payments, setPayments] = useState([
        {
            patientName: "Denil Shaji",
            consultationDate: "2024-11-25",
            paymentDate: "2024-11-15",
            amountPaid: 1000,
            refundAmount: 0,
            refundStatus: "N/A",
        },
        {
            patientName: "Maria Mathew",
            consultationDate: "2024-11-25",
            paymentDate: "2024-11-15",
            amountPaid: 1000,
            refundAmount: 500,
            refundStatus: "Success",
        },
        {
            patientName: "Geoerge",
            consultationDate: "2024-11-25",
            paymentDate: "2024-11-15",
            amountPaid: 1000,
            refundAmount: 0,
            refundStatus: "N/A",
        },
        {
            patientName: "Kajal Aggarawal",
            consultationDate: "2024-11-25",
            paymentDate: "2024-11-15",
            amountPaid: 1000,
            refundAmount: 100,
            refundStatus: "Processing",
        },
        {
            patientName: "Surya Paul",
            consultationDate: "2024-11-25",
            paymentDate: "2024-11-15",
            amountPaid: 1000,
            refundAmount: 0,
            refundStatus: "Failed",
        },
    ]);

   const [searchTerm, setSearchTerm] = useState("");
    const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
    const [showFilterModal, setShowFilterModal] = useState(false);


    const filteredPayments = payments.filter((payment) => {
        const nameMatch = payment.patientName.toLowerCase().includes(searchTerm.toLowerCase());
        const dateMatch =
            (!dateRange.startDate || new Date(payment.consultationDate) >= new Date(dateRange.startDate)) &&
            (!dateRange.endDate || new Date(payment.consultationDate) <= new Date(dateRange.endDate));
        return nameMatch && dateMatch;
    });
    

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

     

    const applyDateFilter = () => {
        setShowFilterModal(false);
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
                    <h1 className="text-2xl font-bold mb-6 mt-14 lg:mt-10">Payments</h1>

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

                    <div className="bg-white shadow-md border border-black rounded-lg overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-200 text-gray-700 border-b border-black">
                                <tr>
                                    <th className="p-4">Patient Name</th>
                                    <th className="p-4">Consultation Date</th>
                                    <th className="p-4">Payment Date</th>
                                    <th className="p-4">Amount Paid</th>
                                    <th className="p-4">Refund Amount</th>
                                    <th className="p-4">Refund Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPayments.map((payment, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-black ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            }`}
                                    >
                                        <td className="p-4">{payment.patientName}</td>
                                        <td className="p-4">{payment.consultationDate}</td>
                                        <td className="p-4">{payment.paymentDate}</td>
                                        <td className="p-4">{payment.amountPaid}</td>
                                        <td className="p-4">{payment.refundAmount}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-2 py-1 rounded-md ${payment.refundStatus === "Success"
                                                        ? "bg-green-200 text-green-800"
                                                        : payment.refundStatus === "Processing"
                                                            ? "bg-blue-200 text-blue-800"
                                                            : "bg-red-200 text-red-800"
                                                    }`}
                                            >
                                                {payment.refundStatus}
                                            </span>
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

export default Payment;