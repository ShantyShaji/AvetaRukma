import React from "react";
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";

const Meeting = ({ meetingId }) => {
  const { join, leave, toggleMic, toggleWebcam, participants } = useMeeting({
    onMeetingJoined: () => console.log("Meeting Joined"),
    onMeetingLeft: () => console.log("Meeting Left"),
  });

  return (
    <div className="meeting">
      <div>
        <h1>Meeting ID: {meetingId}</h1>
        <button onClick={join}>Join Meeting</button>
        <button onClick={leave}>Leave Meeting</button>
        <button onClick={toggleMic}>Toggle Mic</button>
        <button onClick={toggleWebcam}>Toggle Webcam</button>
      </div>

      <div>
        <h2>Participants:</h2>
        {Array.from(participants.values()).map((participant, index) => (
          <div key={index}>{participant.displayName}</div>
        ))}
      </div>
    </div>
  );
};

const MeetingWrapper = () => {
  const meetingId = "your-meeting-id"; // Replace with your dynamic meeting ID
  const apiKey = import.meta.env.VITE_VIDEOSDK_API_KEY; // Use Vite environment variable

  console.log(apiKey); // Make sure the API key is correctly loaded

  if (!apiKey) {
    return <p>Please set your VITE_VIDEOSDK_API_KEY in the .env file.</p>;
  }

  return (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "Participant",
        apiKey,
      }}
    >
      <Meeting meetingId={meetingId} />
    </MeetingProvider>
  );
};

export default MeetingWrapper;


// import React, { useState, useEffect } from "react";
// import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";

// const Meeting = ({ meetingId }) => {
//   const { join, leave, toggleMic, toggleWebcam, participants } = useMeeting({
//     onMeetingJoined: () => console.log("Meeting Joined"),
//     onMeetingLeft: () => console.log("Meeting Left"),
//   });

//   return (
//     <div className="meeting">
//       <div>
//         <h1>Meeting ID: {meetingId}</h1>
//         <button onClick={join}>Join Meeting</button>
//         <button onClick={leave}>Leave Meeting</button>
//         <button onClick={toggleMic}>Toggle Mic</button>
//         <button onClick={toggleWebcam}>Toggle Webcam</button>
//       </div>

//       <div>
//         <h2>Participants:</h2>
//         {Array.from(participants.values()).map((participant, index) => (
//           <div key={index}>{participant.displayName}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MeetingWrapper = () => {
//   const meetingId = "your-meeting-id"; // Replace with your dynamic meeting ID
//   const apiKey = import.meta.env.VITE_VIDEOSDK_API_KEY;

//   // Use a dummy token for testing purposes
//   const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlNjZlYTJlOS02NDBhLTQ4ZDItYTEzOS00YWMyYTI4ZjkxODYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczMzM5OTM0NywiZXhwIjoxNzM0MDA0MTQ3fQ.ZJmnr_YyghvD7eZRSZI5qfQVjYSgwmHa6GaY4JffT3M";

//   if (!dummyToken) {
//     return <p>Token is missing. Please provide a valid token.</p>;
//   }

//   return (
//     <MeetingProvider
//       config={{
//         meetingId,
//         micEnabled: true,
//         webcamEnabled: true,
//         name: "Participant",
//         apiKey,
//         token: dummyToken, // Pass the dummy token here
//       }}
//     >
//       <Meeting meetingId={meetingId} />
//     </MeetingProvider>
//   );
// };

// export default MeetingWrapper;
