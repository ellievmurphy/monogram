import React from "react";
import { bucket } from "./contents/bucket";

export default function LayersView() {
  return (
    <div>
      <ul>
        {bucket.art.map(function (item) {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
      <ul>
        {bucket.text.map(function (item) {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
    </div>
  );
}
