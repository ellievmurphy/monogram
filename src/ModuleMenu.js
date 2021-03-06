import React, { useState } from "react";
import AddArtMenu from "./AddArtMenu";
import AddTextMenu from "./AddTextMenu";
import { CompactPicker } from "react-color";
import { updateBackground } from "./contents/fabric";
import UploadMenu from "./UploadMenu";
import LayersView from "./LayersView";
import "fabric";
import "./ModuleMenu.css";

export default function ModuleMenu() {
  let [verticalBar, setVerticalBar] = useState(
    <div>
      <h4>Welcome!</h4> Select one of the options above
    </div>
  );

  function handleAddText(event) {
    event.preventDefault();
    setVerticalBar(<AddTextMenu keyword="new text" />);
  }
  function handleAddArt(event) {
    event.preventDefault();
    setVerticalBar(<AddArtMenu stateFunction={setVerticalBar} />);
  }
  function handleUpload(event) {
    event.preventDefault();
    setVerticalBar(<UploadMenu />);
  }
  function handleChangeColor(event) {
    event.preventDefault();
    setVerticalBar(
      <div className="color-change-menu-container">
        <CompactPicker
          onChangeComplete={(color) => {
            updateBackground(color);
          }}
        />
        **add text when hovering over color to indicate what color is being
        chosen
      </div>
    );
  }

  function handleViewLayers(event) {
    event.preventDefault();
    setVerticalBar(<LayersView />);
    /* const containerSelector = "#SimpleList .StackedList";
    const containers = document.querySelectorAll(containerSelector);

    if (containers.length === 0) {
      return false;
    }

    const sortable = new Sortable(containers, {
      draggable: ".StackedListItem--isDraggable",
      mirror: {
        appendTo: containerSelector,
        constrainDimensions: true,
      },
    });
    console.log(containers);
    if (containers.length !== 0) {
      setVerticalBar(sortable);
    } */
  }

  return (
    //TODO: how to upload images with fabric??
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
              Product Color
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
      </div>
    </div>
  );
}
