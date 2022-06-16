import React, { useState } from "react";
import { canvas, createText, markToggle } from "./contents/fabric";
import { bucket } from "./contents/bucket";

export default function AddTextMenu(props) {
  let [input, setInput] = useState("New text");
  let [toggleEdit, setToggleEdit] = useState(null);
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
          markToggle(setToggleEdit, text);
          canvas.renderAll();
          console.log(bucket.text);
        }}
      >
        <input type="text" placeholder="Add text..." onChange={handleChange} />
        <input type="submit" />
      </form>
      {toggleEdit}
    </div>
  );
}
