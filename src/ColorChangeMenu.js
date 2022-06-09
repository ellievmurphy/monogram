import React from "react";
import { CirclePicker } from "react-color";
import { bucket, changeBackground } from "./contents/bucket";

export default function ColorChangeMenu() {
  return (
    <div className="color-change-menu-container">
      <CirclePicker
        color={bucket.background}
        onChangeComplete={changeBackground}
      />
      **add text when hovering over color to indicate what color is being chosen
    </div>
  );
}
