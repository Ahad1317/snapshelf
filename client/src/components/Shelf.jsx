import React, { useState } from 'react'
import axios from "axios";

function Shelf(){
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageCount, setImageCount] = useState(0);
  const [isCounterIncremented, setIsCounterIncremented] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setUploadedImage(response.data.imageURL);
        setUploadStatus("Image uploaded successfully.");
        if (!isCounterIncremented) {
          setImageCount(imageCount + 1);
          setIsCounterIncremented(true);
        }
      } else {
        setUploadStatus(response.data.error || "Something went wrong while uploading the image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadStatus("Error uploading image. Please try again later.");
    }
  };

  const fetchImage = async () => {
    if (uploadedImage) {
      try {
        const response = await axios.get(uploadedImage, {
          responseType: "blob",
        });

        const imageUrl = URL.createObjectURL(response.data);
        setUploadedImage(imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    } else {
      setUploadStatus("No image URL available.");
    }
  };

  return (
    <div className="container shadow my-5 login-container">
      <h1>Image Uploader</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={fetchImage}>Fetch Image</button>
      {uploadStatus && <p>{uploadStatus}</p>}
      {uploadedImage && (
        <div>
          <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
      <p>Number of Images Uploaded: {imageCount}</p>
    </div>
  );
}

export default Shelf