import React, { useState } from "react";
import { FabricJSCanvas } from "fabricjs-react";
import { bucket } from "./contents/bucket";
import EditTextMenu from "./EditTextMenu";

export default function AddTextMenu(props) {
  return (
    <div>
      <p>{props.keyword}</p>
    </div>
  );
}
