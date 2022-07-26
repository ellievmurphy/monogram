import React from "react";
import { canvas, changeLayer } from "./contents/fabric-lib";
import { CompactPicker } from "react-color";

export default function EditArtMenu(props) {
  var currObj = props.currObj;
  return (
    <div>
      <br />
      <form className="edit-art-input-menu-container">
        <ul>
          <li>
            Fill color:
            <CompactPicker
              onChange={(color) => {
                canvas.getActiveObject().set("fill", color.hex);
                canvas.renderAll();
              }}
            />
          </li>
          <li>Rotation:</li>
          <li>Outline:</li>
        </ul>
      </form>
      <button
        className="layerDown"
        onClick={(event) => {
          event.preventDefault();
          changeLayer("sendBack");
        }}
      >
        Layer down
      </button>
      <button
        className="layerUp"
        onClick={(event) => {
          event.preventDefault();
          changeLayer("bringUp");
        }}
      >
        Layer up
      </button>
      <button
        className="layerBottom"
        onClick={(event) => {
          event.preventDefault();
          changeLayer("bottom");
        }}
      >
        Bottom layer
      </button>
      <button
        className="layerTop"
        onClick={(event) => {
          event.preventDefault();
          changeLayer("top");
        }}
      >
        Top layer
      </button>
      <br />
      <button
        className="back-button"
        onClick={(event) => {
          canvas.discardActiveObject(currObj);
          props.backFunction(event);
        }}
      >
        back
      </button>
    </div>
  );
}
