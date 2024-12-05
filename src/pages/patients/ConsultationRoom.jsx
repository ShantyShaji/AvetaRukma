
// BookAppointment.js
import React, { useState } from "react";
import PatientSidebar from "../../components/sidebars/PatientSidebar/";
import { FiVideo, FiPhone } from "react-icons/fi";
import { IoMdMic, IoMdMicOff, IoMdSend } from "react-icons/io";
import { BiVideoRecording } from "react-icons/bi"; 


const ConsultationRoom = () => {
  const [formData, setFormData] = useState({
    firstName: "Richard",
    lastName: "Philip",
    email: "RichardPhilip@gmail.com",
    gender: "Male",
    age: 25,
    phoneNumber: "9876543210",
    bloodGroup: "A+",
  });

  return (
    <div className="min-h-screen bg-gray-100 overflow-y-scroll no-scrollbar"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="flex">
        {/* Sidebar Component */}
        <PatientSidebar
          firstName={formData.firstName}
          lastName={formData.lastName}
        />

        {/* Main Content */}
        <main className="w-full lg:5/6 bg-white p-6 lg:p-8 ml-0 lg:ml-60">
          <h1 className="text-2xl font-bold mb-6 mt-14 lg:mt-10">Consultation Room</h1>
          <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Video Section */}
      <div className="w-full lg:w-2/3 bg-white flex items-center justify-center relative p-5">
        {/* Video */}
        <img
          src="https://via.placeholder.com/800x450"
          alt="Doctor"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Video Controls */}
        <div className="absolute bottom-5 flex gap-4 justify-center">
          <button className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow">
            <FiVideo className="text-xl" />
          </button>
          <button className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow">
            <FiPhone className="text-xl" />
          </button>
          <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow">
            <IoMdMicOff className="text-xl" />
          </button>
        </div>

        {/* Small Video Thumbnail */}
        <div className="absolute bottom-20 right-5 w-24 h-24 border-2 border-white rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/100"
            alt="Patient"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-full lg:w-1/3 bg-teal-700 text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-teal-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
              <span className="text-teal-800 font-bold text-lg">P</span>
            </div>
            <h3 className="text-lg font-semibold">DR. Preetha</h3>
          </div>
          <div className="flex gap-4">
            <FiVideo className="text-xl cursor-pointer" />
            <FiPhone className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {/* Message 1 */}
          <div className="flex flex-col items-end">
            <p className="bg-white text-black py-2 px-4 rounded-lg">
              Greetings! How are you?!
            </p>
            <span className="text-xs mt-1">10:15</span>
          </div>

          {/* Image Message */}
          <div className="flex flex-col items-end">
            <img
              src="https://via.placeholder.com/200x100"
              alt="Attachment"
              className="w-40 h-auto rounded-lg"
            />
            <span className="text-xs mt-1">10:15</span>
          </div>

          {/* Voice Message */}
          <div className="flex flex-col items-end">
            <audio controls className="w-40">
              <source src="#" type="audio/mpeg" />
            </audio>
            <span className="text-xs mt-1">10:15</span>
          </div>

          {/* Message 2 */}
          <div className="flex flex-col items-start">
            <p className="bg-white text-black py-2 px-4 rounded-lg">
              Ok Doctor
            </p>
            <span className="text-xs mt-1">10:15</span>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 flex items-center gap-2 bg-teal-800">
          <input
            type="text"
            placeholder="Type Message here..."
            className="flex-1 py-2 px-4 rounded-lg text-black"
          />
          <IoMdMic className="text-2xl cursor-pointer" />
          <IoMdSend className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
        </main>
      </div>
    </div>
  );
};

export default ConsultationRoom;


// import React, { useState } from "react";
// import MeetingWrapper from "../../components/Meeting/";
// import PatientSidebar from "../../components/sidebars/PatientSidebar/";
// import { FiVideo, FiPhone } from "react-icons/fi";
// import { IoMdMic, IoMdMicOff, IoMdSend } from "react-icons/io";
// import { BiVideoRecording } from "react-icons/bi";




// const ConsultationRoom = () => {
//   const [formData, setFormData] = useState({
//     firstName: "Richard",
//     lastName: "Philip",
//     email: "RichardPhilip@gmail.com",
//     gender: "Male",
//     age: 25,
//     phoneNumber: "9876543210",
//     bloodGroup: "A+",
//   });


//   return (
//     <div className="min-h-screen bg-gray-100 overflow-y-scroll no-scrollbar">
//       <div className="flex">
//         <PatientSidebar firstName={formData.firstName} lastName={formData.lastName} />
//         <main className="w-full lg:5/6 bg-white p-6 lg:p-8 ml-0 lg:ml-60">
//           <h1 className="text-2xl font-bold mb-6 mt-14 lg:mt-10">Consultation Room</h1>
//           <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
//             {/* Video Call Section */}
//             <div className="w-full lg:w-2/3 bg-white flex items-center justify-center">
//               <MeetingWrapper />
//             </div>

//             {/* Chat Section */}
//             {/* Chat Messages */}
//             <div className="flex-1 p-4 overflow-y-auto space-y-4">
//               {/* Message 1 */}
//               <div className="flex flex-col items-end">
//                 <p className="bg-white text-black py-2 px-4 rounded-lg">
//                   Greetings! How are you?!
//                 </p>
//                 <span className="text-xs mt-1">10:15</span>
//               </div>

//               {/* Image Message */}
//               <div className="flex flex-col items-end">
//                 <img
//                   src="https://via.placeholder.com/200x100"
//                   alt="Attachment"
//                   className="w-40 h-auto rounded-lg"
//                 />
//                 <span className="text-xs mt-1">10:15</span>
//               </div>

//               {/* Voice Message */}
//               <div className="flex flex-col items-end">
//                 <audio controls className="w-40">
//                   <source src="#" type="audio/mpeg" />
//                 </audio>
//                 <span className="text-xs mt-1">10:15</span>
//               </div>

//               {/* Message 2 */}
//               <div className="flex flex-col items-start">
//                 <p className="bg-white text-black py-2 px-4 rounded-lg">
//                   Ok Doctor
//                 </p>
//                 <span className="text-xs mt-1">10:15</span>
//               </div>
//             </div>

//             {/* Chat Input */}
//             <div className="p-4 flex items-center gap-2 bg-teal-800">
//               <input
//                 type="text"
//                 placeholder="Type Message here..."
//                 className="flex-1 py-2 px-4 rounded-lg text-black"
//               />
//               <IoMdMic className="text-2xl cursor-pointer" />
//               <IoMdSend className="text-2xl cursor-pointer" />
//             </div>
//           </div>
       
//     </main>
//       </div >
//     </div >
//   );
// };
// export default ConsultationRoom;