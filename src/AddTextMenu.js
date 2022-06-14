import React, { useState } from "react";
import { canvas, createText } from "./contents/fabric";
import EditTextMenu from "./EditTextMenu";

export default function AddTextMenu(props) {
  let [input, setInput] = useState("New text");
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const text = createText(input);
          canvas.add(text);
          canvas.renderAll();
        }}
      >
        <input type="text" placeholder="Add text..." onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
