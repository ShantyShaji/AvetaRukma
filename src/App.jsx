import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from './pages/Register';
import ForgotPasswordModal  from './pages/ForgotPasswordModal';
import Profile from "./pages/patients/Profile";
import BookAppointment from "./pages/patients/BookAppointment";
import MyAppointments from "./pages/patients/MyAppointments";
import ConsultationRoom from "./pages/patients/ConsultationRoom";
import PatientNotifications from "./Components/notifications/PatientNotifications";
 

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPasswordModal/>} />
        <Route path="/patients/profile" element={<Profile />} />
        <Route path="/patients/BookAppointment" element={<BookAppointment />} />
        <Route path="/patients/MyAppointments" element={<MyAppointments />} />
        <Route path="/patients/ConsultationRoom" element={<ConsultationRoom />} />
        <Route path="/notifications/PatientNotifications" element={<PatientNotifications />} />
  
      </Routes>
    </Router>
  );
}

export default App;
