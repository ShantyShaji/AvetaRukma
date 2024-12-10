// import React, { useState } from "react";
// import { GrAttachment } from "react-icons/gr";
// import { FaRegImage } from "react-icons/fa";
// import { IoMdMic, IoMdSend } from "react-icons/io";

// const ChatSection = () => {
//   const [messages, setMessages] = useState([
//     { type: "text", content: "Greetings! How are you?!", time: "10:15", sender: "self" },
//     { type: "text", content: "Ok Doctor", time: "10:16", sender: "other" },
//   ]);
//   const [input, setInput] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [enlargedImage, setEnlargedImage] = useState(null);

//   // Simulated doctor responses
//   const doctorReplies = [
//     "I'm doing great, thank you!",
//     "How can I assist you today?",
//     "Make sure to take your medicines on time.",
//     "Let me know if you have any further concerns."
//   ];

//   const handleSend = () => {
//     if (input.trim()) {
//       const userMessage = {
//         type: "text",
//         content: input,
//         time: new Date().toLocaleTimeString(),
//         sender: "self",
//       };

//       setMessages((prevMessages) => [...prevMessages, userMessage]);
//       setInput("");

//       // Simulate doctor's reply
//       setTimeout(() => {
//         const doctorMessage = {
//           type: "text",
//           content: doctorReplies[Math.floor(Math.random() * doctorReplies.length)],
//           time: new Date().toLocaleTimeString(),
//           sender: "other",
//         };

//         setMessages((prevMessages) => [...prevMessages, doctorMessage]);
//       }, 1500); // Simulate delay of 1.5 seconds
//     }

//     if (selectedImage) {
//       const imageMessage = {
//         type: "image",
//         content: URL.createObjectURL(selectedImage),
//         time: new Date().toLocaleTimeString(),
//         sender: "self",
//       };
//       setMessages((prevMessages) => [...prevMessages, imageMessage]);
//       setSelectedImage(null); // Clear the selected image after sending
//     }

//     if (selectedFile) {
//       const fileMessage = {
//         type: "file",
//         content: URL.createObjectURL(selectedFile),
//         time: new Date().toLocaleTimeString(),
//         sender: "self",
//         fileName: selectedFile.name,
//       };
//       setMessages((prevMessages) => [...prevMessages, fileMessage]);
//       setSelectedFile(null); // Clear the selected file after sending
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(file); // Store the image file to be sent
//     }
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file); // Store the file to be sent
//     }
//   };

//   const handleImageClick = () => {
//     document.getElementById("imageUploadInput").click(); // Trigger file input click
//   };

//   const handleFileClick = () => {
//     document.getElementById("fileUploadInput").click(); // Trigger file input click for files
//   };

//   const handleEnlargeImage = (imgSrc) => {
//     setEnlargedImage(imgSrc); // Set the image to enlarge
//   };

//   const handleCloseEnlargedImage = () => {
//     setEnlargedImage(null); // Close enlarged image
//   };

//   return (
//     <div className="w-full lg:w-1/3 bg-teal-700 text-white flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 bg-teal-800">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
//             <span className="text-teal-800 font-bold text-lg">P</span>
//           </div>
//           <h3 className="text-lg font-semibold">DR. Preetha</h3>
//         </div>
//       </div>

//       {/* Chat Messages */}
//       <div className="flex-1 p-4 overflow-y-auto space-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex flex-col ${msg.sender === "self" ? "items-end" : "items-start"}`}
//           >
//             {msg.type === "text" && (
//               <div className="relative">
//                 <p className="bg-white text-black py-2 px-4 rounded-lg">{msg.content}</p>
//                 <span className="text-xs mt-1">{msg.time}</span>
//               </div>
//             )}
//             {msg.type === "image" && (
//               <div className="relative">
//                 <img
//                   src={msg.content}
//                   alt="Attachment"
//                   className="w-40 h-auto rounded-lg cursor-pointer"
//                   onClick={() => handleEnlargeImage(msg.content)} // Enlarge on click
//                 />
//                 <span className="text-xs mt-1">{msg.time}</span>
//               </div>
//             )}
//             {msg.type === "file" && (
//               <div className="relative">
//                 <div className="flex items-center bg-white p-2 rounded-lg gap-2">
//                   <a href={msg.content} download={msg.fileName} className="text-blue-500 underline ">
//                     {msg.fileName}
//                   </a>
//                 </div>
//                 <span className="text-xs mt-1">{msg.time}</span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Enlarge Image Modal */}
//       {enlargedImage && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
//           onClick={handleCloseEnlargedImage} // Close on background click
//         >
//           <img
//             src={enlargedImage}
//             alt="Enlarged"
//             className="max-w-[90%] max-h-[90%] object-contain"
//             onClick={(e) => e.stopPropagation()} // Prevent closing on image click
//           />
//         </div>
//       )}

//       {/* Chat Input */}
//       <div className="p-4 flex items-center gap-2 bg-teal-800">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type Message here..."
//           className="flex-1 py-2 px-4 rounded-lg text-black"
//         />
//         <GrAttachment className="text-2xl cursor-pointer" onClick={handleFileClick} />
//         <FaRegImage
//           className={`text-2xl cursor-pointer ${selectedImage ? 'text-green-500' : ''}`} // Indicate selected image
//           onClick={handleImageClick} // Open file picker when clicked
//         />
//         <input
//           id="imageUploadInput"
//           type="file"
//           accept="image/*"
//           className="hidden"
//           onChange={handleImageUpload} // Handle image upload
//         />
//         <input
//           id="fileUploadInput"
//           type="file"
//           accept="*"
//           className="hidden"
//           onChange={handleFileUpload} // Handle file upload
//         />
//         <IoMdMic className="text-2xl cursor-pointer" />
//         <IoMdSend className="text-2xl cursor-pointer" onClick={handleSend} />
//       </div>
//     </div>
//   );
// };

// export default ChatSection;




import React, { useState, useRef } from "react";
import { GrAttachment } from "react-icons/gr";
import { FaRegImage } from "react-icons/fa";
import { IoMdMic, IoMdSend } from "react-icons/io";

const ChatSection = () => {
  const [messages, setMessages] = useState([
    { type: "text", content: "Greetings! How are you?!", time: "10:15", sender: "self" },
    { type: "text", content: "Ok Doctor", time: "10:16", sender: "other" },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const mediaRecorderRef = useRef(null);  // To store the media recorder instance
  const audioPlayerRef = useRef(null);  // To control audio playback

  // Simulated doctor responses
  const doctorReplies = [
    "I'm doing great, thank you!",
    "How can I assist you today?",
    "Make sure to take your medicines on time.",
    "Let me know if you have any further concerns."
  ];

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = {
        type: "text",
        content: input,
        time: new Date().toLocaleTimeString(),
        sender: "self",
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput(""); // Clear the input field

        // Simulate doctor's reply
        setTimeout(() => {
            const doctorMessage = {
              type: "text",
              content: doctorReplies[Math.floor(Math.random() * doctorReplies.length)],
              time: new Date().toLocaleTimeString(),
              sender: "other",
            };
    
            setMessages((prevMessages) => [...prevMessages, doctorMessage]);
          }, 1500); // Simulate delay of 1.5 seconds
    }

    if (selectedImage) {
      const imageMessage = {
        type: "image",
        content: URL.createObjectURL(selectedImage),
        time: new Date().toLocaleTimeString(),
        sender: "self",
      };
      setMessages((prevMessages) => [...prevMessages, imageMessage]);
      setSelectedImage(null); // Clear the selected image after sending
    }

    if (selectedFile) {
      const fileMessage = {
        type: "file",
        content: URL.createObjectURL(selectedFile),
        time: new Date().toLocaleTimeString(),
        sender: "self",
        fileName: selectedFile.name,
      };
      setMessages((prevMessages) => [...prevMessages, fileMessage]);
      setSelectedFile(null); // Clear the selected file after sending
    }

    // If there's an audio message, add it to the messages
    if (audioUrl) {
      const audioMessage = {
        type: "audio",
        content: audioUrl,
        time: new Date().toLocaleTimeString(),
        sender: "self",
      };
      setMessages((prevMessages) => [...prevMessages, audioMessage]);
      setAudioUrl(null); // Clear the audio after sending
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the image file to be sent
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the file to be sent
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageUploadInput").click(); // Trigger file input click
  };

  const handleFileClick = () => {
    document.getElementById("fileUploadInput").click(); // Trigger file input click for files
  };

  const handleEnlargeImage = (imgSrc) => {
    setEnlargedImage(imgSrc); // Set the image to enlarge
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null); // Close enlarged image
  };

  // Start or stop recording when the microphone icon is clicked
  const handleMicClick = () => {
    if (isRecording) {
      // Stop recording
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      // Start recording
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorderRef.current = new MediaRecorder(stream);
          const chunks = [];
          mediaRecorderRef.current.ondataavailable = (e) => {
            chunks.push(e.data);
          };
          mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(chunks, { type: "audio/wav" });
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudioUrl(audioUrl); // Store the audio URL for playback
          };
          mediaRecorderRef.current.start();
          setIsRecording(true);
        })
        .catch((err) => {
          console.error("Error accessing microphone:", err);
        });
    }
  };

  // Play/pause the recorded audio
  const handleAudioPlayPause = () => {
    if (audioPlayerRef.current.paused) {
      audioPlayerRef.current.play();
    } else {
      audioPlayerRef.current.pause();
    }
  };

  return (
    <div className="w-full lg:w-1/3 bg-teal-700 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-teal-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
            <span className="text-teal-800 font-bold text-lg">P</span>
          </div>
          <h3 className="text-lg font-semibold">DR. Preetha</h3>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.sender === "self" ? "items-end" : "items-start"}`}
          >
            {msg.type === "text" && (
              <div className="relative">
                <p className="bg-white text-black py-2 px-4 rounded-lg">{msg.content}</p>
                <span className="text-xs mt-1">{msg.time}</span>
              </div>
            )}
            {msg.type === "image" && (
              <div className="relative">
                <img
                  src={msg.content}
                  alt="Attachment"
                  className="w-40 h-auto rounded-lg cursor-pointer"
                  onClick={() => handleEnlargeImage(msg.content)} // Enlarge on click
                />
                <span className="text-xs mt-1">{msg.time}</span>
              </div>
            )}
            {msg.type === "audio" && (
              <div className="relative">
                <audio
                  ref={audioPlayerRef}
                  controls
                  src={msg.content}
                  className="w-[15rem]"
                />
                <span className="text-xs mt-1">{msg.time}</span>
              </div>
            )}
            {msg.type === "file" && (
              <div className="relative">
                <div className="flex items-center bg-white p-2 rounded-lg gap-2">
                  <a href={msg.content} download={msg.fileName} className="text-blue-500 underline ">
                    {msg.fileName}
                  </a>
                </div>
                <span className="text-xs mt-1">{msg.time}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 flex items-center gap-2 bg-teal-800">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type Message here..."
          className="flex-1 py-2 px-2 rounded-lg text-black"
        />
        <GrAttachment className="text-2xl cursor-pointer" onClick={handleFileClick} />
        <FaRegImage
          className={`text-2xl cursor-pointer ${selectedImage ? 'text-green-500' : ''}`}
          onClick={handleImageClick}
        />
        <input
          id="imageUploadInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        <input
          id="fileUploadInput"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
        <IoMdMic
          className={`text-2xl cursor-pointer ${isRecording ? 'text-red-500' : ''}`}
          onClick={handleMicClick}
        />
        <IoMdSend className="text-2xl cursor-pointer" onClick={handleSend} />
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-3/4 h-3/4">
            <img
              src={enlargedImage}
              alt="Enlarged"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={handleCloseEnlargedImage}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
