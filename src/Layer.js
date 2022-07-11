import React from "react";
import { canvas, deleteSelected } from "./contents/fabric";
import { DeleteIcon } from "./contents/DeleteIcon.js";
import { removeItem } from "./contents/bucket";
import { Reorder, motion, useMotionValue } from "framer-motion";
import "./Layer.css";

export default function Layer({ name, obj, onRemove }) {
  const y = useMotionValue(0);
  return (
    <Reorder.Item className="layer-item--isDraggable" value={name} style={y}>
      <motion.h1 whileHover={{ scale: 1.1 }}>
        {name}
        <motion.button
          className="remove-layer-button"
          onPointerDown={(event) => {
            event.stopPropagation();
            canvas.setActiveObject(obj);
            deleteSelected();
            onRemove();
          }}
          style={{ marginLeft: 10 }}
        >
          <DeleteIcon />
        </motion.button>
      </motion.h1>
    </Reorder.Item>
  );
}
