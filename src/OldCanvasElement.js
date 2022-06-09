import React, { useEffect } from "react";
import { FabricJSCanvas } from "fabricjs-react";
import { useFabricJSEditor } from "fabricjs-react";
import "./CanvasElement.css";

export default function CanvasElement(props) {
  const { editor, onReady } = useFabricJSEditor();
  const bucket = props.data;

  useEffect(() => {
    if (editor) {
      editor.canvas.setBackgroundColor(bucket.background.hex);
    }
  }, [editor, bucket.background.hex]);
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddText = () => {
    editor.addText("New Text");
  };
  const deleteSelected = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };
  return (
    <div className="canvas-element-container">
      <h1>FabricJS React Sample</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button
        onClick={(event) => {
          event.preventDefault();
          console.log(bucket.art);
        }}
      >
        Add Image
      </button>
      <button onClick={onAddText}>Add Text</button>
      <button onClick={(event) => event.preventDefault}>Update Color</button>
      <button onClick={deleteSelected}>Delete Selected</button>

      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
}
