import React, { useState } from "react";
import { bucket, addText, removeObj } from "./contents/bucket";
import { deleteIcon } from "./contents/fabric-lib";
import editIcon from "./images/edit-button.svg";
import EditTextMenu from "./EditTextMenu";

export default function AddTextMenu(props) {
  //   const [input, setInput] = useState("New text");
  let textLayers = [];
  let input = "";

  function checkType(obj) {
    return obj.category === "text";
  }

  const addPage = (
    <form
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
    </form>
  );

  //   const handleSubmit = () => {
  //     addText(input);
  //     // console.log(bucket.layers[0].category);
  //     // setTextLayers(bucket.layers.filter(checkType));
  //     // let list = bucket.layers.filter(checkType);
  //     // console.log(list);
  //     textLayers = bucket.layers.filter(checkType);
  //     console.log(textLayers);
  //     // setTextPage(
  //     //   <TextTabs
  //     //     list={textLayers}
  //     //     addPage={addPage}
  //     //     filterFunction={checkType}
  //     //   />
  //     // );
  //   };

  //   const defaultPage = (
  //     //update default page to have text tabs
  //     <form
  //       onSubmit={(event) => {
  //         console.log("a");
  //         event.preventDefault();
  //         handleSubmit();
  //       }}
  //     >
  //       <input
  //         type="text"
  //         placeholder="Add text..."
  //         onChange={(event) => {
  //           setInput(event.target.value);
  //         }}
  //       />
  //       <input type="submit" />
  //     </form>
  //   );

  //   const [textPage, setTextPage] = useState(
  //     <TextTabs list={textLayers} addPage={addPage} filterFunction={checkType} />
  //   );

  //   let [txtPage, setTxtPage] = useState(
  //     <form
  //       onSubmit={(event) => {
  //         event.preventDefault();
  //         addText(input);
  //         setTextLayers(bucket.layers.filter(checkType));
  //       }}
  //     >
  //       <input type="text" placeholder="Add text..." onChange={handleChange} />
  //       <input type="submit" />
  //     </form>
  //   );

  //   if (textLayers.length > 0) {
  //     return <TextTabs list={textLayers} addPage={addPage} />;
  //   } else {
  //     return defaultPage;
  //   }

  //   if (toggleShowSub) {
  //     return <TextTabs list={textLayers} addPage={addPage} />;
  //   } else return <div>{defaultPage}</div>;

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

const TextTabs = ({ list, addPage, filterFunction }) => {
  function handleEdit() {
    updateMenu(<EditTextMenu />);
  }
  function loadLayers() {
    list = bucket.layers.filter(filterFunction);
  }
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
              >
                <a href="#">{item.name}</a>
                <input
                  type="image"
                  src={editIcon}
                  alt="edit icon"
                  style={{ width: 15 }}
                  onClick={handleEdit}
                />
                <input
                  type="image"
                  src={deleteIcon}
                  alt="delete icon"
                  style={{ width: 15 }}
                  onClick={() => {
                    removeObj();
                    list = loadLayers();
                    //look at layersView when update list
                  }}
                />
              </div>
            );
          })}
        </div>
      );
    }
  };
  const [selectedMenu, setSelectedMenu] = useState(textLayers);
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
