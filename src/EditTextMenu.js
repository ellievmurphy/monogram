import React, { useState } from "react";
import { CompactPicker } from "react-color";
import "./EditTextMenu.css";

export default function EditTextMenu() {
  let [showMenu, setShowMenu] = useState(false);

  function handleDrop(event) {
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
          <li>
            Font:
            <div class="dropdown">
              <button onClick={handleDrop}>Fonts</button>
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
            <CompactPicker />
          </li>
          <li>Monogram Scale:</li>
          <li>Rotation:</li>
          <li>Outline:</li>
          <li>Text Shape:</li>
          <li>Text Size:</li>
        </ul>
      </form>
    </div>
  );
}
