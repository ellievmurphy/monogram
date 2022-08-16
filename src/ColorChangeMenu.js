import React from "react";
import { HuePicker } from "react-color";
import { bucket } from "./contents/bucket";
import { updateBackground } from "./contents/fabric";

export default function ColorChangeMenu() {
  //TODO: how to setColor() for objects?
  return (
    <div className="color-change-menu-container">
      <HuePicker
        color={bucket.background}
        onChangeComplete={() => {
          updateBackground;
        }}
      />
      <br />
      **add text when hovering over color to indicate what color is being chosen
    </div>
  );
}
