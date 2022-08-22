import React, { useState } from "react";
import {
  bucket,
  addTextbox,
  addText,
  removeObj,
  loadFilteredLayers,
} from "./contents/bucket";
import { deleteIcon, canvas } from "./contents/fabric-lib";
import editIcon from "./images/edit-button.svg";
import EditTextMenu from "./EditTextMenu";

// Main React component for AddTextMenu. Has the ability to add / edit / remove text and
// view different text layers.
// Depends on bucket.layers from ./contents/bucket.js for the list of layers and addText / removeObj for
//   adding and removing text elements from the canvas
export default function AddTextMenu(props) {
  // textLayers stores only the bucket.layers elements which are an instance of Fabric.Text objects
  let textLayers = [];
  // maintains the user's input to be displayed when text objects are added to the canvas
  // TODO: currently gets updated during onChange for text input form attribute, would prefer to store this in a state
  let input = "";

  // function used in conjunction with Array.prototype.filter() function to filter bucket's list of layers
  function checkType(obj) {
    // filters by element's category property in bucket.layers
    return obj.category === "text";
  }

  // React component stored in addPage represents the submission form used to add a new text element to the canvas
  const addPage = (
    <form
      style={{ marginTop: 15 }}
      onSubmit={(event) => {
        event.preventDefault();
        if (input.length === 0) {
          input = "New Text";
        }
        addText(input);
      }}
    >
      <input
        type="text"
        placeholder="Add text..."
        onChange={(event) => {
          input = event.target.value;
        }}
      />
      <input type="submit" />
      <button onClick={addTextbox}>Add Textbox</button>
    </form>
  );

  return (
    <div>
      <TextTabs
        list={textLayers}
        addPage={addPage}
        filterFunction={checkType}
      />
    </div>
  );
}

/**
 * React component stored in TextTabs const. Creates the interface for viewing existing layers or adding new layers.
 * Does not contain the implementation for the page to add new text, this is located in main component in variable "AddPage"
 * @param list represents the list of text layers to print in "Existing Layers tab"
 * @param addPage passes the variable containing the implementation for adding text from main component to TextTabs
 * @param filterFunction passes the checkType() function used to filter bucket.layers from main component to TextTabs
 * @return main implementation of ModuleMenu sub-page under Add Text category
 *           which provides an interface to view and add text layers to the canvas
 */
const TextTabs = ({ list, addPage, filterFunction }) => {
  // used as an event listener function to toggle the visibility of the text-editing page
  function handleEdit() {
    updateMenu(<EditTextMenu />);
  }
  // function used to refresh / load the filtered version of bucket.layers with only text elements
  function loadLayers() {
    list = loadFilteredLayers(filterFunction);
  }

  // const stores a React.Component implementation for displaying the layers of text on the canvas,
  // or a message prompting the user to add text if none exist.
  const textLayers = () => {
    loadLayers();
    if (list.length === 0) {
      return <div>ADD TEXT PLEASE!!</div>;
    } else {
      return (
        <div>
          {list.map((item, i) => {
            return (
              <div
                style={{
                  width: 200,
                  padding: 10,
                  marginTop: 10,
                  textAlign: "left",
                }}
                key={i}
                id={item.objId}
              >
                <a
                  href="#"
                  onClick={() => {
                    console.log(canvas.setActiveObject(item));
                  }}
                >
                  {item.name}
                </a>
                <input
                  type="image"
                  src={editIcon}
                  alt="edit icon"
                  style={{ marginLeft: 10, width: 15 }}
                  onClick={handleEdit}
                />
                <input
                  type="image"
                  src={deleteIcon}
                  alt="delete icon"
                  style={{ marginLeft: 10, width: 15 }}
                  onClick={() => {
                    removeObj();
                  }}
                />
              </div>
            );
          })}
        </div>
      );
    }
  };

  // useState which stores the selectedMenu (edit existing text / add new text)
  const [selectedMenu, setSelectedMenu] = useState(textLayers);
  // function used to update selectedMenu state to the provided menu parameter (must be a react component or null)
  function updateMenu(menu) {
    setSelectedMenu(menu);
  }
  return (
    <div>
      <nav style={{ display: "flex" }}>
        <button
          style={{ width: 125 }}
          onClick={(event) => {
            event.preventDefault();
            setSelectedMenu(textLayers);
          }}
        >
          Edit Current Layers
        </button>
        <button
          style={{ width: 125 }}
          onClick={(event) => {
            event.preventDefault();
            setSelectedMenu(addPage);
          }}
        >
          Add New Text
        </button>
      </nav>
      {selectedMenu}
    </div>
  );
};
