import React, { useState } from "react";
import { SketchPicker } from "react-color";
// TODO: super weird behavior when this line is removed, despite not being used
import { canvas } from "./contents/fabric-lib";
import { changeObjColor, updateScale } from "./contents/bucket";

export default function EditArtMenu(props) {
  //   var currObj = props.currObj;
  const [elemSize, setElemSize] = useState(20);
  return (
    <div>
      <br />
      <form className="edit-art-input-menu-container">
        <ul>
          <li>
            <label htmlFor="art-scale-slider">Change Scale:</label>
            <h5>**Doesn't work for Rect yet</h5>
            <input
              type="range"
              name="art-scale-slider"
              id="art-scale-slider"
              min="20"
              max="110"
              defaultValue="20"
              step={"1"}
              onChange={(event) => {
                setElemSize(event.target.value);
                updateScale(elemSize);
              }}
            />
          </li>
          <li>
            <label htmlFor="object-color">Fill color:</label>
            <SketchPicker
              id="object-color"
              name="object-color"
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
