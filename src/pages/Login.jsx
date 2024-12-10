import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailError = "";
    let passwordError = "";

    if (!validateEmail(email)) {
      emailError = "Please enter a valid email address.";
    }

    if (!validatePassword(password)) {
      passwordError =
        "Password must contain at least 6 characters, including uppercase, lowercase, number, and special character.";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({ email: "", password: "" });
      // Proceed with form submission
      console.log("Form submitted successfully!");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Sign-in failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center shadow-lg bg-white rounded-lg overflow-hidden w-[90%] lg:w-[70%]">
        {/* Left Section - Form */}
        <div className="w-full lg:w-2/5 p-10">
          <div className="flex justify-start mb-8">
            <img
              src="/aveta_logo.svg" // Replace with your logo URL
              alt="Logo"
              className="h-10"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

          {/* Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[1rem] font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className={`w-full border px-4 py-2 rounded-md focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-[1rem] font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className={`w-full border px-4 py-2 rounded-md focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="text-left text-sm text-black hover:text-blue-500 cursor-pointer" onClick={() => setIsModalOpen(true)}>
              Forgot password?
            </div>
            <ForgotPasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-900"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Google Sign-In */}
          <button
            type="button"  onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100"
          >
            <FcGoogle className="text-red-500 mr-2" />
            Sign in with Google
          </button>

          {/* Register */}
          <div className="mt-5 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/Register"
              className="text-black hover:text-blue-500 font-bold"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center ">
          <img
            src="/login_img.svg" // Replace with your illustration URL
            alt="Login Illustration"
            className="max-h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;



// login page firebase added should add this in the above code


// import React from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "./firebase-config";

// const LoginPage = () => {
//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("User Info:", user);
//       alert(`Welcome, ${user.displayName}!`);
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//       alert("Sign-in failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-2xl mb-5">Sign in with Google</h1>
//       <button
//         onClick={handleGoogleSignIn}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// };

// export default LoginPage;
