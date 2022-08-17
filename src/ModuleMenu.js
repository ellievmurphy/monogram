import React, { useState } from "react";
import AddArtMenu from "./AddArtMenu";
import AddTextMenu from "./AddTextMenu";
import { SketchPicker } from "react-color";
import { updateBackground } from "./contents/fabric-lib";
import UploadMenu from "./UploadMenu";
import LayersView from "./LayersView";
import { bucket } from "./contents/bucket";
import { canvas } from "./contents/fabric-lib";
import "fabric";
import "./ModuleMenu.css";

// Main React component which holds the customization menu used to update products on canvas
export default function ModuleMenu() {
  //vertical bar represents the current tab being displayed on the customization menu
  let [verticalBar, setVerticalBar] = useState(
    <div>
      <h4>Welcome!</h4> Select one of the options above
    </div>
  );

  // handles event when text tab is selected from customization menu
  // updates vertical bar to the AddTextMenu React component
  function handleAddText(event) {
    event.preventDefault();
    setVerticalBar(<AddTextMenu keyword="new text" />);
  }
  // handles event when art tab is selected from customization menu
  // updates vertical bar to AddArtMenu React component
  // passes setVerticalBar function via props to be used in child component
  function handleAddArt(event) {
    event.preventDefault();
    setVerticalBar(<AddArtMenu stateFunction={setVerticalBar} />);
  }
  // handles event when upload tab is selected from customization menu
  // updates vertical bar to UploadMenu React component
  function handleUpload(event) {
    event.preventDefault();
    setVerticalBar(<UploadMenu />);
  }
  // handles event when product color tab is selected from customization menu
  // updates vertical bar to display the CompactPicker imported from "react-color" library
  function handleChangeColor(event) {
    event.preventDefault();
    setVerticalBar(
      <div className="color-change-menu-container">
        <SketchPicker
          onChangeComplete={(color) => {
            updateBackground(color);
          }}
        />
      </div>
    );
  }

  // handles event when view layers tab is selected from customization menu
  // updates vertical bar to LayersView React component
  function handleViewLayers(event) {
    event.preventDefault();
    setVerticalBar(<LayersView />);
  }

  let [output, setOutput] = useState("");
  // return statement renders the customization menu and fabricjs canvas on page
  return (
    <>
      <div className="top-menu-container">
        {/* nav attribute holds the different customization tabs and updates verticalBar on selection
            of one of these tabs */}
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
        {/* holds the verticalBar state which re-renders every time a new customization tab is selected */}
        <div className="vertical-toolbar-container flex-item">
          {verticalBar}
        </div>
      </div>
      <footer id="main-menu-footer">
        <div className="io-buttons">
          <button
            id="export-button"
            onClick={(event) => {
              event.preventDefault();
              console.log(bucket.layers);
              setOutput(
                JSON.stringify(
                  canvas.toDatalessJSON([
                    "objId",
                    "id",
                    "selectable",
                    "name",
                    "category",
                  ])
                )
              );
              console.log("save");
            }}
          >
            Export
          </button>
          <button
            id="load-button"
            onClick={(event) => {
              event.preventDefault();
              if (output) {
                try {
                  var obj = JSON.parse(output); // this is how you parse a string into JSON
                  console.log(obj);
                  bucket.background = obj.background;
                } catch (ex) {
                  console.error(ex);
                }

                obj = canvas.loadFromJSON(output);
                bucket.layers = [...obj._objects];
                bucket.layers.shift(); // remove the product layer from view (i.e. white rectangle)
                for (let i = 0; i < bucket.layers.length; i++) {
                  bucket.ids[i] = bucket.layers[i].objId;
                  //   console.log(
                  //     i +
                  //       ": " +
                  //       bucket.layers[i].objId +
                  //       ", " +
                  //       bucket.layers[i].name +
                  //       ", " +
                  //       bucket.ids[i] +
                  //       "\n"
                  //   );
                }
              }
              console.log("load");
            }}
          >
            Load
          </button>
        </div>
      </footer>
    </>
  );
}
