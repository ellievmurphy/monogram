import React, { useState } from "react";
import AddArtMenu from "./AddArtMenu";
import AddTextMenu from "./AddTextMenu";
import CanvasElement from "./CanvasElement";
import { CirclePicker } from "react-color";
import { bucket, changeBackground } from "./contents/bucket";
import UploadMenu from "./UploadMenu";
import LayersView from "./LayersView";
import "fabric";
import "./ModuleMenu.css";

export default function ModuleMenu() {
  let [verticalBar, setVerticalBar] = useState(<div>Left</div>);

  function handleAddText(event) {
    event.preventDefault();
    setVerticalBar(<AddTextMenu keyword="new text" />);
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
    setVerticalBar(
      <div className="color-change-menu-container">
        <CirclePicker onChangeComplete={changeBackground} />
        **add text when hovering over color to indicate what color is being
        chosen
      </div>
    );
  }
  function handleViewLayers(event) {
    event.preventDefault();
    setVerticalBar(<LayersView />);
  }

  return (
    <div className="top-menu-container">
      <nav>
        <ul>
          <li className="add-text-button-container">
            <a href="_blank" onClick={handleAddText}>
              Add Text
            </a>
          </li>
          <li className="add-art-button-container">
            <a href="_blank" onClick={handleAddArt}>
              Add Art
            </a>
          </li>
          <li className="upload-button-container">
            <a href="_blank" onClick={handleUpload}>
              Upload
            </a>
          </li>
          <li className="change-color-button-container">
            <a href="_blank" onClick={handleChangeColor}>
              Change Color
            </a>
          </li>
          <li className="view-layers-button-container">
            <a href="_blank" onClick={handleViewLayers}>
              View Layers
            </a>
          </li>
        </ul>
      </nav>
      <div className="canvas-and-friends-container">
        <div className="vertical-toolbar-container flex-item">
          {verticalBar}
        </div>
        <div className="canvas-container flex-item">
          <CanvasElement data={bucket} />
        </div>
      </div>
    </div>
  );
}
