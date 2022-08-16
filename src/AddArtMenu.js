import React, { useState } from "react";
import EditArtMenu from "./EditArtMenu";
import {
  FaAngellist,
  FaAt,
  FaDog,
  FaLeaf,
  FaCoffee,
  FaHeart,
  FaBrain,
} from "react-icons/fa";
import {
  bucket,
  removeObj,
  addArt,
  loadFilteredLayers,
} from "./contents/bucket";
import editIcon from "./images/edit-button.svg";
import { canvas, deleteIcon } from "./contents/fabric-lib";

import "./AddArtMenu.css";

// main React.Component which contains the implementation for interface to add / edit clip-art on the canvas.
// depends on bucket.layers from ./contents/bucket for the list of art layers and addArt() for adding clip-
//   art to the canvas
export default function AddArtMenu() {
  // List representing the art layers contained in bucket.layers list
  let artLayers = [];

  // function used by Array.prototype.filter() function to filter art layers from bucket.layers list based on
  //   the category property of the obj passed in the parameter
  function checkType(obj) {
    return obj.category === "art";
  }
  // useState containing the current menu selected from artMenu
  // default value is set to render the ArtTabs React.Component defined below main component
  //   let [artDisplay, setArtDisplay] = useState(

  //   );

  return (
    <div className="nav-image-category-container">
      {
        <ArtTabs
          list={artLayers}
          //   menuPage={artMenu}
          filterFunction={checkType}
        />
      }
    </div>
  );
}

const MenuDisplay = ({ filterFunction, layers }) => {
  let artMenu = (
    <div>
      <form className="category-button-container">
        <button
          onClick={(event) => {
            event.preventDefault();
            handleClickPop();
          }}
          className="category-button popular-cat"
        >
          <FaHeart />
          <h4>{`Most Popular`}</h4>
        </button>
        <button
          onClick={handleClickEmoji}
          className="category-button emojis-cat"
        >
          <FaAngellist />
          <h4>Emojis</h4>
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleClickSym();
          }}
          className="category-button symbols-cat"
        >
          <FaAt />
          <h4>{`Symbols & Shapes`}</h4>
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleClickAni();
          }}
          className="category-button animals-cat"
        >
          <FaDog />
          <h4>Animals</h4>
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleClickNat();
          }}
          className="category-button nature-cat"
        >
          <FaLeaf />
          <h4>Nature</h4>
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleClickFD();
          }}
          className="category-button food-cat"
        >
          <FaCoffee />
          <h4>{`Food & Drink`}</h4>
        </button>
      </form>
    </div>
  );
  const [menuDisplay, setMenuDisplay] = useState(artMenu);

  // The functions defined below are used to handle which menu option is selected from the artMenu page
  //   when a button is pressed for a new menu, the artDisplay state will be updated, and thus re-rendered,
  //   based on the menu selected.
  var handleClickDefault = () => {
    layers = loadFilteredLayers(filterFunction);
  };
  var handleClickPop = () => {
    setMenuDisplay(
      <div>
        <h3>
          Popular <FaBrain />
        </h3>
      </div>
    );
  };
  var handleClickEmoji = () => {
    setMenuDisplay(
      <div>
        <h3>
          Emoji <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  };
  var handleClickSym = () => {
    setMenuDisplay(
      <div>
        <h4>Shapes and Symbols</h4>
        <ul>
          <li>
            <button
              onClick={() => {
                addArt("circle");
                handleClickDefault();
                canvas.renderAll();
              }}
            >
              Circle
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                addArt("rect");
                handleClickDefault();
                canvas.renderAll();
              }}
            >
              Rectangle
            </button>
          </li>
        </ul>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  };
  var handleClickNat = () => {
    setMenuDisplay(
      <div>
        <h3>
          Nature <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  };
  var handleClickAni = () => {
    setMenuDisplay(
      <div>
        <h3>
          Animals <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  };
  var handleClickFD = () => {
    setMenuDisplay(
      <div>
        <h3>
          Food and Drink <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  };
  // React.Component implementation of the main selection menu for adding art to the page

  return <div>{menuDisplay}</div>;
};

// React.Component implementation used to display the AddArtMenu sub-page allowing users to add / view
// art layers on the canvas.
const ArtTabs = ({ list, filterFunction }) => {
  // event listener response which toggles the edit menu for clip art
  function handleEdit() {
    updateMenu(<EditArtMenu />);
  }
  // used to load / refresh the art layers currently on the canvas
  function loadLayers() {
    list = loadFilteredLayers(filterFunction);
  }
  const artLayers = () => {
    loadLayers();
    if (list.length === 0) {
      return <div>no art? oh... ok</div>;
    } else {
      return (
        <div>
          {loadLayers()}
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
  let [selectedMenu, setSelectedMenu] = useState(artLayers);
  function updateMenu(menu) {
    setSelectedMenu(menu);
  }

  return (
    <div>
      <nav style={{ display: "flex" }}>
        <button
          style={{ width: 125 }}
          onClick={() => {
            setSelectedMenu(artLayers);
          }}
        >
          Edit Current Layers
        </button>
        <button
          style={{ width: 125 }}
          onClick={() => {
            setSelectedMenu(
              <MenuDisplay filterFunction={filterFunction} layers={list} />
            );
          }}
        >
          Add New Art
        </button>
        {/* <button style={{ marginLeft: 50 }}>
          <AiOutlineReload />
        </button> */}
      </nav>
      {selectedMenu}
    </div>
  );
};
