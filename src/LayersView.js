import React from "react";
import { bucket } from "./contents/bucket";

export default function LayersView() {
  return (
    <div>
      <ul>
        {bucket.layers.map(function (item) {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
    </div>
  );
}
