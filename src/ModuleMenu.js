import React, { useState } from "react";
import AddArtMenu from "./AddArtMenu";
import AddTextMenu from "./AddTextMenu";
import CanvasElement from "./CanvasElement";
import ColorChangeMenu from "./ColorChangeMenu";
import "./ModuleMenu.css";
import UploadMenu from "./UploadMenu";

export default function ModuleMenu() {
  let [verticalBar, setVerticalBar] = useState(<div>Left</div>);

  function handleAddText(event) {
    event.preventDefault();
    setVerticalBar(<AddTextMenu keyword="New Text" />);
  }

  function handleAddArt(event) {
    event.preventDefault();
    setVerticalBar(<AddArtMenu />);
  }

  function handleUpload(event) {
    event.preventDefault();
    setVerticalBar(<UploadMenu />);
  }

  function handleChangeColor(event) {
    event.preventDefault();
    setVerticalBar(<ColorChangeMenu />);
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
        <div className="canvas-container flex-item">
          <CanvasElement />
        </div>
      </div>
    </div>
  );
}
