import React, { useState } from "react";
import { addUpload } from "./contents/bucket";

export default function UploadMenu() {
  let [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${image.name}`);
    addUpload(image);
  }

  function handleChange(event) {
    console.log(event.target);
    setImage(event.target.files[0]);
  }

  return (
    <div className="upload-menu-container">
      Upload File
      <form id="uploadImg" onSubmit={handleSubmit}>
        <input
          type="file"
          name="filename"
          id="uploadedImg"
          onInput={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
