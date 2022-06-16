import React from "react";
import { CompactPicker } from "react-color";
import { bucket } from "./contents/bucket";
import { updateBackground } from "./contents/fabric";

export default function ColorChangeMenu() {
  //TODO: how to setColor() for objects?
  return (
    <div className="color-change-menu-container">
      <CompactPicker
        color={bucket.background}
        onChangeComplete={() => {
          console.log("hi!");
          updateBackground;
        }}
      />
      **add text when hovering over color to indicate what color is being chosen
    </div>
  );
}
