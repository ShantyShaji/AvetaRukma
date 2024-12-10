 // Payments.js
 import React, { useState } from "react";
 import DoctorSidebar from "../../Components/Sidebars/DoctorSidebar";
 import { FiSearch } from "react-icons/fi";
 import { RiCalendarLine } from "react-icons/ri";
 
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
   const [startDate, setStartDate] = useState(null);
   const [endDate, setEndDate] = useState(null);
 
   const filteredPayments = payments.filter((payment) => {
     const nameMatch = payment.patientName.toLowerCase().includes(searchTerm.toLowerCase());
     const dateMatch =
       (!startDate || new Date(payment.consultationDate) >= startDate) &&
       (!endDate || new Date(payment.consultationDate) <= endDate);
     return nameMatch && dateMatch;
   });
 
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
 
           <div className="flex justify-between items-center mb-6">
             <div className="relative">
               <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
               <input
                 type="text"
                 placeholder="Search by patient name"
                 className="w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
             </div>
             <div className="flex items-center space-x-4">
               <div className="relative">
                 <RiCalendarLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                 <input
                   type="date"
                   placeholder="Start date"
                   className="w-40 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                   value={startDate ? startDate.toISOString().substr(0, 10) : ""}
                   onChange={(e) =>
                     setStartDate(e.target.value ? new Date(e.target.value) : null)
                   }
                 />
               </div>
               <div className="relative">
                 <RiCalendarLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                 <input
                   type="date"
                   placeholder="End date"
                   className="w-40 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                   value={endDate ? endDate.toISOString().substr(0, 10) : ""}
                   onChange={(e) =>
                     setEndDate(e.target.value ? new Date(e.target.value) : null)
                   }
                 />
               </div>
               <button
                 className="bg-black text-white px-4 py-2 rounded-md"
                 onClick={() => {
                   setSearchTerm("");
                   setStartDate(null);
                   setEndDate(null);
                 }}
               >
                 By name
               </button>
             </div>
           </div>
 
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
                     className={`border-b border-black ${
                       index % 2 === 0 ? "bg-gray-50" : "bg-white"
                     }`}
                   >
                     <td className="p-4">{payment.patientName}</td>
                     <td className="p-4">{payment.consultationDate}</td>
                     <td className="p-4">{payment.paymentDate}</td>
                     <td className="p-4">{payment.amountPaid}</td>
                     <td className="p-4">{payment.refundAmount}</td>
                     <td className="p-4">
                       <span
                         className={`px-2 py-1 rounded-md ${
                           payment.refundStatus === "Success"
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