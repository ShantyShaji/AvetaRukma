import React, { useState } from "react";
import { MeetingProvider, useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { FiVideo, FiPhone } from "react-icons/fi";
import { IoMdMic, IoMdMicOff } from "react-icons/io";

const VideoCallComponent = () => {
  const [meetingId, setMeetingId] = useState(""); // Stores the meeting ID
  const [isMeetingStarted, setIsMeetingStarted] = useState(false); // Tracks meeting state
  const [isConnected, setIsConnected] = useState(false);
  const [initialWebcamOn, setInitialWebcamOn] = useState(false); // Add this state

  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlNjZlYTJlOS02NDBhLTQ4ZDItYTEzOS00YWMyYTI4ZjkxODYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczMzQ4Mzg3OSwiZXhwIjoxNzM0MDg4Njc5fQ.rKzmlJx4LfJsU88k1gsAI6J9g2uhRvCWxSLDXR77Bn8"; // Replace with your VideoSDK API key.

  const onMeetingJoin = () => {
    console.log("Meeting joined successfully!");
    setIsConnected(true);
  };

  const onMeetingLeave = () => {
    console.log("Meeting left.");
    setIsMeetingStarted(false);
  };

  // Meeting Controls Component
  const MeetingControls = () => {
    const meeting = useMeeting();
    const [isTogglingMic, setIsTogglingMic] = useState(false);
    const [isTogglingWebcam, setIsTogglingWebcam] = useState(false);

    const handleMicToggle = async () => {
      if (isTogglingMic) return;
      try {
        setIsTogglingMic(true);
        await meeting.toggleMic();
      } catch (error) {
        console.error("Error toggling microphone:", error);
      } finally {
        setIsTogglingMic(false);
      }
    };

    const handleWebcamToggle = async () => {
      if (isTogglingWebcam) return;
      try {
        setIsTogglingWebcam(true);
        await meeting.toggleWebcam();
      } catch (error) {
        console.error("Error toggling webcam:", error);
      } finally {
        setIsTogglingWebcam(false);
      }
    };

    const handleLeave = () => {
      try {
        meeting.leave();
        // Reset the meeting state
        setIsMeetingStarted(false);
        setMeetingId("");
      } catch (error) {
        console.error("Error leaving meeting:", error);
      }
    };

    return (
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 justify-center">
        <button
          className={`${
            meeting.localWebcamOn ? "bg-green-500" : "bg-gray-500"
          } text-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:opacity-80 transition-opacity ${
            isTogglingWebcam ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleWebcamToggle}
          disabled={isTogglingWebcam}
          title={meeting.localWebcamOn ? "Turn off camera" : "Turn on camera"}
        >
          <FiVideo className="text-xl" />
        </button>
        <button
          className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:opacity-80 transition-opacity"
          onClick={handleLeave}
          title="Leave meeting"
        >
          <FiPhone className="text-xl rotate-[135deg]" />
        </button>
        <button
          className={`${
            meeting.localMicOn ? "bg-green-500" : "bg-gray-500"
          } text-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:opacity-80 transition-opacity ${
            isTogglingMic ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleMicToggle}
          disabled={isTogglingMic}
          title={meeting.localMicOn ? "Mute microphone" : "Unmute microphone"}
        >
          {meeting.localMicOn ? (
            <IoMdMic className="text-xl" />
          ) : (
            <IoMdMicOff className="text-xl" />
          )}
        </button>
      </div>
    );
  };

  const getToken = async () => {
    try {
      const response = await fetch("https://api.videosdk.live/v2/token", {
        method: "GET",
        headers: {
          'Authorization': apiKey,
          'Content-Type': 'application/json',
        }
      });
      
      const { token } = await response.json();
      return token;
    } catch (error) {
      console.error("Error getting token:", error);
      return null;
    }
  };

  const startMeeting = async () => {
    try {
      const response = await fetch("https://api.videosdk.live/v2/rooms", {
        method: "POST",
        headers: {
          Authorization: apiKey,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setMeetingId(data.roomId);
      console.log("Meeting created with ID:", data.roomId);
    } catch (error) {
      console.error("Error creating meeting:", error);
    }
  };
  

  // Add ParticipantView component
  const ParticipantView = ({ participantId }) => {
    const { webcamStream, micStream, webcamOn, micOn } = useParticipant(participantId);

    React.useEffect(() => {
      if (webcamStream) {
        const videoElement = document.getElementById(`video-${participantId}`);
        if (videoElement) {
          videoElement.srcObject = new MediaStream([webcamStream.track]);
        }
      }
    }, [webcamStream, participantId]);

    return (
      <div className="relative w-full h-full">
        {webcamOn && webcamStream ? (
          <>
            <video
              id={`video-${participantId}`}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            {!micOn && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <div className="bg-red-500 rounded-full p-4">
                  <IoMdMicOff className="text-white text-3xl" />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white mb-4">Camera Off</div>
              {!micOn && (
                <div className="bg-red-500 rounded-full p-4">
                  <IoMdMicOff className="text-white text-3xl" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Update MeetingView component to handle multiple participants
  const MeetingView = () => {
    const { participants, localParticipant } = useMeeting({
      onParticipantLeft: () => {
        console.log("Participant left");
      },
      onParticipantJoined: () => {
        console.log("Participant joined");
      }
    });

    if (!localParticipant) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500">Connecting to the meeting...</p>
        </div>
      );
    }

    const remoteParticipants = [...participants.values()].filter(
      participant => participant.id !== localParticipant.id
    );

    return (
      <div className="w-full h-full relative">
        {/* Main video container */}
        <div className="w-full h-full">
          {remoteParticipants.length > 0 ? (
            // Grid layout for multiple participants
            <div className="w-full h-full">
              <div className={`grid gap-2 w-full h-full p-2 ${
                remoteParticipants.length <= 1 ? 'grid-cols-1' :
                remoteParticipants.length <= 2 ? 'grid-cols-2' :
                'grid-cols-2 md:grid-cols-3'
              }`}>
                {/* Remote participants */}
                {remoteParticipants.map((participant) => (
                  <div key={participant.id} className="relative w-full h-full min-h-[200px]">
                    <ParticipantView participantId={participant.id} />
                    <div className="absolute top-2 left-2 z-10 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                      Participant {participant.id.slice(-4)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Local participant in small box (bottom-right) */}
              <div className="absolute bottom-20 right-4 w-48 h-36 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <ParticipantView participantId={localParticipant.id} />
                <div className="absolute top-2 left-2 z-10 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  You
                </div>
              </div>
            </div>
          ) : (
            // When no one has joined yet
            <div className="flex h-full">
              {/* Main view with local participant */}
              <div className="flex-1 relative">
                <ParticipantView participantId={localParticipant.id} />
                <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg">
                  <span>You</span>
                </div>
              </div>
              
              {/* Waiting info in small box (right side) */}
              <div className="w-72 bg-gray-800 p-4 flex flex-col justify-center items-center">
                <div className="text-center text-white">
                  <p className="text-lg font-semibold mb-4">Waiting for others to join...</p>
                  <p className="text-sm text-gray-300 mb-4">Share the meeting ID with others</p>
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-sm font-mono select-all break-all">
                      {localParticipant.meetingId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Participants count */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
          {remoteParticipants.length + 1} Participants
        </div>

        {/* Controls remain at the bottom */}
        <MeetingControls />
      </div>
    );
  };

  // Add initialization function
  const initializeMeeting = async () => {
    try {
      // Request camera permission before starting
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: true 
      });
      setInitialWebcamOn(true);
      // Clean up the stream
      stream.getTracks().forEach(track => track.stop());
    } catch (error) {
      console.error("Error accessing camera:", error);
      setInitialWebcamOn(false);
    }
  };

  // Call initialization when starting meeting
  const handleStartMeeting = async () => {
    await initializeMeeting();
    setIsMeetingStarted(true);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {!isMeetingStarted ? (
        <div className="flex flex-col items-center">
          {/* Create Meeting */}
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-4 hover:bg-blue-600 transition-colors"
            onClick={startMeeting}
          >
            Create Meeting
          </button>

          {/* Join Meeting */}
          <div className="flex flex-col items-center gap-2">
            <input
              type="text"
              className="border px-4 py-2 rounded-lg w-64 text-center"
              placeholder="Enter Meeting ID"
              value={meetingId}
              onChange={(e) => setMeetingId(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              onClick={handleStartMeeting} // Use new handler
              disabled={!meetingId.trim()}
            >
              Join Meeting
            </button>
          </div>
        </div>
      ) : (
        <MeetingProvider
          config={{
            meetingId,
            micEnabled: true,
            webcamEnabled: initialWebcamOn, // Use the state
            name: "User",
            participantId: "participant-" + Math.floor(Math.random() * 1000),
            multiStream: true,
          }}
          token={apiKey}
          joinWithoutUserInteraction={true}
          onError={(error) => {
            console.error("Meeting Error:", error);
          }}
          onMeetingJoin={onMeetingJoin}
          onMeetingLeave={onMeetingLeave}
        >
          <div className="w-full h-full relative bg-black">
            <MeetingControls />
            <MeetingView />
          </div>
        </MeetingProvider>
      )}
    </div>
  );
};

export default VideoCallComponent;

