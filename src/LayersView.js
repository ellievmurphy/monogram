import React, { useState } from "react";
import { bucket } from "./contents/bucket";
import { Reorder } from "framer-motion";
import Layer from "./Layer";
import "./LayersView.css";

export default function LayersView() {
  let [list, setList] = useState(bucket.layers);

  function removeItem(idx) {
    setList(bucket.layers.splice(idx, 1));
  }

  return (
    <Reorder.Group
      id="layer-container"
      axis="y"
      className="draggable-layer-list-container"
      onReorder={setList}
      values={list}
    >
      {list.map((item, i) => {
        return (
          <Layer
            className="layer-item--isDraggable"
            name={item.name}
            obj={item}
            key={i}
            onRemove={removeItem}
          />
        );
      })}
    </Reorder.Group>
  );
}
