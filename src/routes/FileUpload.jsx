import React, { useState } from "react";
import './FileUpload.css'

const FileUpload = () => {
  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
    console.log(file);
  }
  return (
    <div className="contain">
      <h2 className="what">FileUpload in Reactjs</h2>

      <form>
        <input type="file" name="file" onChange={handleFile} className="file" />
        <button className="sirf">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
