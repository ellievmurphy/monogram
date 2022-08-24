import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { changeFont, changeObjColor, updateScale } from "./contents/bucket";
import { canvas } from "./contents/fabric-lib";
import "./EditTextMenu.css";

export default function EditTextMenu(props) {
  let isBox = props.isBox;
  let [showMenu, setShowMenu] = useState(false);
  let [fontSize, setFontSize] = useState(100);
  let [boxSize, setBoxSize] = useState({
    height: canvas.getActiveObject().get("height").toFixed(),
    width: canvas.getActiveObject().get("width").toFixed(),
  });
  //   var fonts = ["mono_display"];
  function handleFontDrop(event) {
    event.preventDefault();

    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  function changeHeight(height) {
    setBoxSize({ ...boxSize, height: height });
    canvas.getActiveObject().set("height", height);
    canvas.renderAll();
  }

  function changeWidth(width) {
    setBoxSize({ ...boxSize, width: width });
    canvas.getActiveObject().set("width", width);
    canvas.renderAll();
  }

  if (isBox) {
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
              <label htmlFor="box-size-input">Box Scale:</label>
              <label htmlFor="freeze-box-size" style={{ marginLeft: 25 }}>
                <em>Freeze: </em>
              </label>
              <input
                type="checkbox"
                id="freeze-box-size"
                name="freeze-box-size"
              />
              <br />
              <section name="box-size-input" id="box-size-input">
                <label htmlFor="height-input">Height: </label>
                <input
                  type="number"
                  name="height-input"
                  id="height-input"
                  step="1"
                  style={{ width: 50 }}
                  defaultValue={boxSize.height}
                  onChange={(event) => {
                    //update height value of boxSize state variable
                    changeHeight(event.target.value);
                  }}
                />
                <label htmlFor="width-input" style={{ marginLeft: 15 }}>
                  Width:{" "}
                </label>

                <input
                  type="number"
                  name="width-input"
                  id="width-input"
                  style={{ width: 50 }}
                  step="2"
                  defaultValue={boxSize.width}
                  onChange={(event) => {
                    //update width value of boxSize state variable
                    changeWidth(event.target.value);
                  }}
                />
              </section>
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
  } else
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
              <label htmlFor="scale-slider">Monogram Scale:</label>
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
