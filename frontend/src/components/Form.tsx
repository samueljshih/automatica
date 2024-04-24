import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const Form = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/voicenotes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-8xl font-bold mb-14 text-indigo-400">Automatica</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input
          type="submit"
          className="bg-indigo-400 hover:bg-indigo-600 text-white py-2 px-4 rounded"
        />
      </form>
    </div>
  );
};

export default Form;
