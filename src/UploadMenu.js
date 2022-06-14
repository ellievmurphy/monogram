import React, { useState } from "react";
import { addUpload } from "./contents/bucket";

export default function UploadMenu() {
  let [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${image}`);

    addUpload(image);
  }

  function handleChange(event) {
    setImage(event.target.files[0].name);
  }

  return (
    <div className="upload-menu-container">
      Upload File
      <form id="uploadImg" onSubmit={handleSubmit}>
        <input
          type="file"
          name="filename"
          onChange={handleChange}
          id="uploadedImg"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
