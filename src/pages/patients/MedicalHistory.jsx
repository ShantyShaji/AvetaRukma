import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'; // Trash icon

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [selectedPreview, setSelectedPreview] = useState(null); // To store the selected file's preview
  
  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  // Handle file removal
  const handleDeleteFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter(file => file.name !== fileName));
    // If the deleted file was the currently selected preview, reset the selected preview
    if (selectedPreview && selectedPreview.name === fileName) {
      setSelectedPreview(null);
    }
  };

  // Handle selecting a file for preview (Image or PDF)
  const handleFileClick = (file) => {
    if (file.type.includes('image')) {
      // Generate object URL for images and update the selectedPreview state
      const imageUrl = URL.createObjectURL(file);
      setSelectedPreview({ type: 'image', url: imageUrl });
    } else if (file.type.includes('pdf')) {
      // Generate object URL for PDFs and update the selectedPreview state
      const pdfUrl = URL.createObjectURL(file);
      setSelectedPreview({ type: 'pdf', url: pdfUrl });
    } else {
      setSelectedPreview(null); // In case the file is not an image or pdf
    }
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-medium text-lg">My Medical Reports</h3>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center">
        {/* Left side - File List */}
        <div className="w-full lg:w-1/2 p-4 border-r">
          <div className="file-list mt-4">
            {files.length > 0 ? (
              files.map((file) => (
                <div key={file.name} className="flex items-center justify-between mb-2">
                  <span
                    className="cursor-pointer"
                    onClick={() => handleFileClick(file)} // Handle file click (image or pdf)
                  >
                    {file.name}
                  </span>
                  <button
                    onClick={() => handleDeleteFile(file.name)}
                    className="text-red-500 text-xs lg:text-lg"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              ))
            ) : (
              <p>No files uploaded</p>
            )}
          </div>
          <input 
            type="file" 
            onChange={handleFileChange} 
            multiple 
            className="mb-4 p-2 border rounded-md w-full"
          />
        </div>

        {/* Right side - Preview */}
        <div className="w-full sm:w-auto lg:w-1/2 p-4">
          {selectedPreview ? (
            // If the selected file is an image
            selectedPreview.type === 'image' ? (
              <div>
                <h3 className="text-lg font-medium">Image Preview</h3>
                <img 
                  src={selectedPreview.url} 
                  alt="Selected" 
                  className="mt-4 max-w-full max-h-[300px] object-contain border rounded-md"
                />
              </div>
            ) : 
            // If the selected file is a PDF
            selectedPreview.type === 'pdf' ? (
              <div>
                <h3 className="text-lg font-medium">PDF Preview</h3>
                <object
                  data={selectedPreview.url}
                  type="application/pdf"
                  width="100%"
                  height="400px"
                  className="mt-4 border rounded-md"
                >
                  <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={selectedPreview.url} target="_blank" rel="noopener noreferrer">Download PDF</a></p>
                </object>
              </div>
            ) : null
          ) : (
            <p className="text-center text-gray-500">Click on a file to preview</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
