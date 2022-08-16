import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { changeFont, changeObjColor, updateScale } from "./contents/bucket";
import "./EditTextMenu.css";

export default function EditTextMenu(props) {
  let [showMenu, setShowMenu] = useState(false);
  let [fontSize, setFontSize] = useState(100);
  //   var fonts = ["mono_display"];
  function handleFontDrop(event) {
    event.preventDefault();

    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  return (
    <div className="edit-text-menu-container">
      <form className="edit-text-input-form">
        <ul>
          <li className="font-dropdown-menu-container">
            Font:
            <div className="dropdown">
              <button onClick={handleFontDrop}>Fonts</button>
              {showMenu ? (
                <div id="myDropdown" className="dropdown-content">
                  <a
                    href="_blank"
                    id="mono_display"
                    onClick={(event) => {
                      event.preventDefault();
                      changeFont("mono_display");
                    }}
                  >
                    Mono Display
                  </a>
                  <br />
                  <a
                    href="_blank"
                    id="arial"
                    onClick={(event) => {
                      event.preventDefault();
                      changeFont("arial");
                    }}
                  >
                    Arial
                  </a>
                  <br />
                  <a href="_blank">Font 3</a>
                </div>
              ) : null}
            </div>
          </li>
          <li>
            <label htmlFor="scale-slider:">Monogram Scale:</label>
            <br />
            <input
              type={"range"}
              name="scale-slider"
              id="scale-slider"
              min="20"
              max="110"
              defaultValue="65"
              step={"1"}
              onChange={(event) => {
                setFontSize(event.target.value);
                updateScale(fontSize);
              }}
            />
          </li>
          <li>
            Text color:
            <SketchPicker
              onChange={(color) => {
                changeObjColor(color);
              }}
            />
          </li>
        </ul>
      </form>
    </div>
  );
}
