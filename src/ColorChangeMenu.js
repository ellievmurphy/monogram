import React from "react";
import { CirclePicker } from "react-color";
import { bucket } from "./contents/bucket";
import { updateBackground } from "./contents/fabric";

export default function ColorChangeMenu() {
  return (
    <div className="color-change-menu-container">
      <CirclePicker
        color={bucket.background}
        onChangeComplete={updateBackground}
      />
      **add text when hovering over color to indicate what color is being chosen
    </div>
  );
}
