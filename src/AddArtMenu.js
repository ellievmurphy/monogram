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
import { AiOutlineReload } from "react-icons/ai";
import { bucket, removeObj } from "./contents/bucket";
import editIcon from "./images/edit-button.svg";
import {
  createCircle,
  createRect,
  canvas,
  deleteIcon,
} from "./contents/fabric-lib";

import "./AddArtMenu.css";
export default function AddArtMenu() {
  //let [artLayers, setArtLayers] = useState([]);
  let artLayers = [];
  const artMenu = (
    <div>
      <form className="category-button-container">
        <button
          onClick={handleClickPop}
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
          onClick={handleClickSym}
          className="category-button symbols-cat"
        >
          <FaAt />
          <h4>{`Symbols & Shapes`}</h4>
        </button>
        <button
          onClick={handleClickAni}
          className="category-button animals-cat"
        >
          <FaDog />
          <h4>Animals</h4>
        </button>
        <button onClick={handleClickNat} className="category-button nature-cat">
          <FaLeaf />
          <h4>Nature</h4>
        </button>
        <button onClick={handleClickFD} className="category-button food-cat">
          <FaCoffee />
          <h4>{`Food & Drink`}</h4>
        </button>
      </form>
    </div>
  );
  function checkType(obj) {
    return obj.category === "art";
  }
  let [artDisplay, setArtDisplay] = useState(
    <ArtTabs list={artLayers} menuPage={artMenu} filterFunction={checkType} />
  );

  //   function goBack(event) {
  //     event.preventDefault();
  //     setArtDisplay(artMenu);
  //   }

  function handleClickDefault() {
    artLayers = bucket.layers.filter(checkType);
    setArtDisplay(
      <ArtTabs list={artLayers} menuPage={artMenu} filterFunction={checkType} />
    );
  }

  //   function openEdit(event, obj) {
  //     event.preventDefault();
  //     setArtDisplay(<EditArtMenu backFunction={goBack} currObj={obj} />);
  //   }

  function handleClickPop(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <h3>
          Popular <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  }

  function handleClickEmoji(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <h3>
          Emoji <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  }

  function handleClickSym(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <h4>Shapes and Symbols</h4>
        <ul>
          <li>
            <button
              onClick={(event) => {
                event.preventDefault();
                const obj = createCircle();
                canvas.add(obj);
                canvas.setActiveObject(obj);
                handleClickDefault();
                canvas.renderAll();
              }}
            >
              Circle
            </button>
          </li>
          <li>
            <button
              onClick={(event) => {
                event.preventDefault();
                const obj = createRect();
                canvas.add(obj);
                canvas.setActiveObject(obj);
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
  }

  function handleClickNat(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <h3>
          Nature <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  }

  function handleClickAni(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <h3>
          Animals <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  }

  function handleClickFD(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <h3>
          Food and Drink <FaBrain />
        </h3>
        {/* <button className="back-button" onClick={goBack}>
          back
        </button> */}
      </div>
    );
  }

  return <div className="nav-image-category-container">{artDisplay}</div>;
}

const ArtTabs = ({ list, menuPage, filterFunction }) => {
  function handleEdit() {
    updateMenu(<EditArtMenu />);
  }
  function loadLayers() {
    list = bucket.layers.filter(filterFunction);
  }
  const artLayers = () => {
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
          onClick={(event) => {
            event.preventDefault();
            setSelectedMenu(artLayers);
          }}
        >
          Edit Current Layers
        </button>
        <button
          style={{ width: 125 }}
          onClick={(event) => {
            event.preventDefault();
            setSelectedMenu(menuPage);
          }}
        >
          Add New Art
        </button>
        <button style={{ marginLeft: 50 }}>
          <AiOutlineReload />
        </button>
      </nav>
      {selectedMenu}
    </div>
  );
};
