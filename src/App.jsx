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
import DoctorProfile from "./pages/doctor/DoctorProfile";
import DoctorNotifications from "./Components/notifications/DoctorNotifications";
import Dashboard from "./pages/doctor/Dashboard";
import Appointments from "./pages/doctor/Appointments";
import ScheduleAvailability from "./pages/doctor/ScheduleAvailability";
import Payment from "./pages/doctor/Payment";
import DoctorConsultationRoom from "./pages/doctor/DoctorConsultationRoom";

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

        <Route path="/doctor/dashboard" element={<Dashboard />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/appointments" element={<Appointments />} />
        <Route path="/doctor/schedule" element={<ScheduleAvailability />} />
        <Route path="/doctor/consultationroom" element={<DoctorConsultationRoom />} />
        <Route path="/doctor/payment" element={<Payment />} />



  


        <Route path="/notifications/DoctorNotifications" element={<DoctorNotifications />} />

      </Routes>
    </Router>
  );
}

export default App;
