import React, { useState } from "react";
import { CompactPicker } from "react-color";
import { canvas } from "./contents/fabric";

export default function EditTextMenu(props) {
  let [showMenu, setShowMenu] = useState(false);
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
                  <a href="_blank">Font 1</a>
                  <a href="_blank">Font 2</a>
                  <a href="_blank">Font 3</a>
                </div>
              ) : null}
            </div>
          </li>
          <li>
            Text color:
            <CompactPicker
              onChange={(color) => {
                canvas.getActiveObject().set("fill", color.hex);
                canvas.renderAll();
              }}
            />
          </li>
          <li>Monogram Scale:</li>
          <li>Rotation:</li>
          <li>Outline:</li>
          <li>Text Shape:</li>
          <li>Text Size:</li>
        </ul>
      </form>
      <button className="back-button" onClick={props.backFunction}>
        Back
      </button>
    </div>
  );
}
