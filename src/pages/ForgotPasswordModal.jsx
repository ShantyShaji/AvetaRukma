import React, { useState } from "react";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("Password reset link has been sent to your email.");
      setEmail("");
      setTimeout(() => setMessage(""), 5000); // Clear message after 5 seconds
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md w-[80%] lg:w-[30%] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Forgot Password</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            ✕
          </button>
        </div>
        <p className="text-gray-700 mb-4">
          Enter your email address to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-black text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="text-sm mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
