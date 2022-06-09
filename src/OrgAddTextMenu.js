import React, { useState, useContext } from "react";
import { CanvasContext } from "./CanvasContext";
import { FabricJSCanvas } from "fabricjs-react";
import EditTextMenu from "./EditTextMenu";

export default function AddTextMenu(props) {
  const { keyword, setKeyword } = useContext(CanvasContext);
  let [loaded, setLoaded] = useState(false);
  let [userInput, setUserInput] = useState("");
  let [editText, setEditText] = useState(null);
  const { editor } = useContext(CanvasContext);

  function handleKeywordChange(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(userInput);
    editor.addText("New Text");
    setEditText(<EditTextMenu />);
  }

  function load() {
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="text-menu-container">
        <section>
          <span className="search">Search:</span>
          <form onClick={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              value={userInput}
              onChange={handleKeywordChange}
              placeholder="Search for a word..."
            />
            <input type="submit" />
          </form>
        </section>
        <div id="keyword-container">{keyword}</div>
        <br />
        <div className="edit-text-menu-container-wrapper">{editText}</div>
      </div>
    );
  } else {
    load();
    return <span>Loading...</span>;
  }
}
