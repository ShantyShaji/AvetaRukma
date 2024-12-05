const AppointmentView = ({ appointment, onClose }) => {
      
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            {appointment ? "Appointment Details" : "Reschedule Appointment"}
          </h2>
          {appointment && (
            <div>
              <p>
                <strong>Appointment ID:</strong> {appointment.id}
              </p>
              <p>
              <strong>Full Name:</strong> {appointment.fullName}
            </p>
            <p>
              <strong>Age:</strong> {appointment.age}
            </p>
            <p>
              <strong>Gender:</strong> {appointment.gender}
            </p>
            <p>
              <strong>Treatment:</strong> {appointment.treatment}
            </p>
            <p>
              <strong>Notes:</strong> {appointment.notes}
            </p>
              <p>
                <strong>Date:</strong> {appointment.date}
              </p>
              <p>
                <strong>Time:</strong> {appointment.time}
              </p>
              <p>
                <strong>Status:</strong> {appointment.status}
              </p>
            </div>
          )}
  
          <div className="flex justify-end gap-4 mt-6">
            <button
              className="px-4 py-2 border border-black text-black rounded-lg"
              onClick={onClose}
            >
              Close
            </button>
            {/* {appointment?.status === "Upcoming" && (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => {
                  alert("Rescheduling...");
                  onClose();
                }}
              >
                Reschedule
              </button>
            )} */}
          </div>
        </div>
      </div>
    );
  };
  
  export default AppointmentView;
  