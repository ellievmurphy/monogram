import React from "react";
import { bucket } from "./contents/bucket";
import DraggableList from "react-draggable-list";

export default function LayersView() {
  // <DraggableList list={bucket.layers} itemKey={bucket.layers.id} />
  return (
    <>
      {bucket.layers &&
        bucket.layers.map((item, index) => (
          <h1 key={index} draggable>
            {item.id}
          </h1>
        ))}
    </>
  );
}
