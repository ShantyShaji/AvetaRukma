// import React from 'react';

// const RegistrationForm = () => {
//   return (
//     <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md max-w-5xl mx-auto">
//       <div className="flex justify-end mb-8">
//         <img
//           src="/aveta_logo.svg" // Replace with your logo URL
//           alt="Logo"
//           className="h-14"
//         />
//       </div>
//       <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6">Registration</h2>

//       <div className="flex flex-col gap-6">
//         {/* Personal Information Section */}
//         <div>
//           <h3 className="font-semibold text-2xl mb-2">Personal Information</h3>
//           <hr className="border-t border-gray-300" />
//         </div>

//         <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
//           <div>
//             <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter first name"
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter last name"
//             />
//           </div>
//         </div>

//         <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
//           <div>
//             <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
//               Age
//             </label>
//             <input
//               type="number"
//               id="age"
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter age"
//             />
//           </div>
//           <div>
//             <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
//               Gender
//             </label>
//             <select
//               id="gender"
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="" disabled selected>
//                 Select Gender
//               </option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//               <option value="prefer_not_to_say">Prefer Not to Say</option>
//             </select>
//           </div>
//         </div>
//         <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
//           <div>
//             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter email"
//             />
//           </div>
//           <div>
//             <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
//               Phone
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter phone"
//             />
//           </div>
//         </div>

//         {/* Health Information Section */}
//         <div>
//           <h3 className="font-semibold text-2xl mb-2">Health Information</h3>
//           <hr className="border-t border-gray-300" />
//         </div>

//         <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
//         <div>
//   <label htmlFor="bloodGroup" className="block text-gray-700 font-medium mb-2">
//     Blood Group
//   </label>
//   <select
//     id="bloodGroup"
//     className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//   >
//     <option value="" disabled selected>
//       Select Blood Group
//     </option>
//     <option value="A+">A+</option>
//     <option value="A-">A-</option>
//     <option value="B+">B+</option>
//     <option value="B-">B-</option>
//     <option value="AB+">AB+</option>
//     <option value="AB-">AB-</option>
//     <option value="O+">O+</option>
//     <option value="O-">O-</option>
//   </select>
// </div>
//           <div>
//           <label htmlFor="primaryReason" className="block text-gray-700 font-medium mb-2">
//             Primary Reason for Consultation
//           </label>
//           <input
//             type="text"
//             id="primaryReason"
//             className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder='Enter primary reason for consultation'
//           />
//         </div>
//         </div>
//         <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
//         <div>
//           <label htmlFor="medicalHistory" className="block text-gray-700 font-medium mb-2">
//             Medical History
//           </label>
//           <input
//             type="file"
//             id="medicalHistory"
//             className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//           <div>
//           <label htmlFor="currentMedications" className="block text-gray-700 font-medium mb-2">
//             Current Medications
//           </label>
//           <input
//             type="text"
//             id="currentMedications"
//             className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder='Enter current medications'
//           />
//         </div>
//         </div>
//         <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
//         <div>
//           <label htmlFor="allergies" className="block text-gray-700 font-medium mb-2">
//             Allergies
//           </label>
//           <input
//             type="text"
//             id="allergies"
//             className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder='Enter allergies'
//           />
//         </div>
//         <div>
//           <label htmlFor="chronicConditions" className="block text-gray-700 font-medium mb-2">
//             Chronic Conditions
//           </label>
//           <input
//             type="text"
//             id="chronicConditions"
//             className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder='Enter chronic conditions'
//           />
//         </div>
//         </div>

//         {/* Submit Button */}
//         <div className="mt-6 text-center">
//           <button className="bg-black text-white font-medium py-2 px-6 rounded-md hover:bg-gray-900 transition duration-200">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;





import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    bloodGroup: "",
    primaryReason: "",
    medicalHistory: null,
    currentMedications: "",
    allergies: "",
    chronicConditions: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
    if (!formData.age) errors.age = "Age is required.";
    else if (formData.age <= 0) errors.age = "Age must be a positive number.";
    if (!formData.gender) errors.gender = "Gender is required.";
    if (!formData.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email address.";
    if (!formData.phone)
      errors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number must be 10 digits.";
    if (!formData.bloodGroup) errors.bloodGroup = "Blood group is required.";
    if (!formData.primaryReason)
      errors.primaryReason = "Primary reason for consultation is required.";
    return errors;
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully", formData);
      // Add form submission logic here
    }
  };

  return (
    <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md w-[80%] lg:w-[80%] mx-auto">

      <div className="flex justify-end mb-8">
        <img src="/aveta_logo.svg" alt="Logo" className="h-14" />
      </div>
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6">Registration</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <h3 className="font-semibold text-2xl mb-2">Personal Information</h3>
          <hr className="border-t text-6xl font-bold border-black" />
        </div>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter first name"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter last name"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
          <div>
            <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter age"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>
          <div>
            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer Not to Say</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>
        </div>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
        </div>

        {/* Health Information Section */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">Health Information</h3>
          <hr className="border-t text-6xl font-bold border-black" />
        </div>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
        <div>
  <label htmlFor="bloodGroup" className="block text-gray-700 font-medium mb-2">
    Blood Group
  </label>
  <select
    id="bloodGroup"
    className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={formData.bloodGroup}
    onChange={handleChange}
  >
    <option value="" disabled selected>
      Select Blood Group
    </option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </select>
  {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup}</p>}
</div>
          <div>
          <label htmlFor="primaryReason" className="block text-gray-700 font-medium mb-2">
            Primary Reason for Consultation
          </label>
          <input
            type="text"
            id="primaryReason"
            className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
             placeholder='Enter primary reason for consultation'
             value={formData.primaryReason}
             onChange={handleChange}
          />
           {errors.primaryReason && <p className="text-red-500 text-sm">{errors.primaryReason}</p>}
        </div>
        </div>
        <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
        <div>
          <label htmlFor="medicalHistory" className="block text-gray-700 font-medium mb-2">
            Medical History
          </label>
          <input
            type="file"
            id="medicalHistory"
            className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.medicalHistory}
             onChange={handleChange}
          />
            {errors.medicalHistory && <p className="text-red-500 text-sm">{errors.medicalHistory}</p>}
        </div>
          <div>
          <label htmlFor="currentMedications" className="block text-gray-700 font-medium mb-2">
            Current Medications
          </label>
          <input
            type="text"
            id="currentMedications"
            className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder='Enter current medications'
            value={formData.currentMedications}
            onChange={handleChange}
          />
           {errors.currentMedications && <p className="text-red-500 text-sm">{errors.currentMedications}</p>}
        </div>
        </div>
        <div className="grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2">
        <div>
          <label htmlFor="allergies" className="block text-gray-700 font-medium mb-2">
            Allergies
          </label>
          <input
            type="text"
            id="allergies"
            className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder='Enter allergies'
            value={formData.allergies}
            onChange={handleChange}
          />
          {errors.allergies && <p className="text-red-500 text-sm">{errors.allergies}</p>}
        </div>
        <div>
          <label htmlFor="chronicConditions" className="block text-gray-700 font-medium mb-2">
            Chronic Conditions
          </label>
          <input
            type="text"
            id="chronicConditions"
            className="w-full border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder='Enter chronic conditions'
            value={formData.chronicConditions}
            onChange={handleChange}
          />
          {errors.chronicConditions && <p className="text-red-500 text-sm">{errors.chronicConditions}</p>}
        </div>
        </div>

        <div className="mt-6 text-left">
          <button className="bg-black text-white font-medium py-2 px-6 rounded-md hover:bg-gray-900 transition duration-200">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

