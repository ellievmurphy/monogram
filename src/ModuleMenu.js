import React, { useState } from "react";
import AddArtMenu from "./AddArtMenu";
import AddTextMenu from "./AddTextMenu";
import "./ModuleMenu.css";

export default function ModuleMenu() {
  let [verticalBar, setVerticalBar] = useState(<div>Left</div>);

  function handleAddText(event) {
    event.preventDefault();
    setVerticalBar(<AddTextMenu />);
  }

  function handleAddArt(event) {
    event.preventDefault();
    setVerticalBar(<AddArtMenu />);
  }

  function handleUpload(event) {
    event.preventDefault();
    setVerticalBar(<div>Upload</div>);
  }

  function handleChangeColor(event) {
    event.preventDefault();
    setVerticalBar(<div>Change Color</div>);
  }

  return (
    <div className="top-menu-container">
      <nav>
        <ul>
          <li>
            <a href="_blank" onClick={handleAddText}>
              Add Text
            </a>
          </li>
          <li>
            <a href="_blank" onClick={handleAddArt}>
              Add Art
            </a>
          </li>
          <li>
            <a href="_blank" onClick={handleUpload}>
              Upload
            </a>
          </li>
          <li>
            <a href="_blank" onClick={handleChangeColor}>
              Change Color
            </a>
          </li>
        </ul>
      </nav>
      <div className="canvas-and-friends-container">
        <div className="vertical-toolbar-container flex-item">
          {verticalBar}
        </div>
        <div className="canvas-container flex-item">Canvas</div>
        <div className="action-toolbar-container flex-item">Right</div>
      </div>
    </div>
  );
}
