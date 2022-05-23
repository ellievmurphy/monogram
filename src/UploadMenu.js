import React, { useState } from "react";

export default function UploadMenu() {
  let tempRef = React.createRef;

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${tempRef.current.files[0].name}`);
  }

  return (
    <div className="upload-menu-container">
      Upload File
      <form onSubmit={handleSubmit}>
        <input type="file" name="filename" ref={tempRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
