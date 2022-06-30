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
import { createCircle, canvas, createRect } from "./contents/fabric";

import "./AddArtMenu.css";
export default function AddArtMenu() {
  function goBack(event) {
    event.preventDefault();
    setArtDisplay(
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
          <button
            onClick={handleClickNat}
            className="category-button nature-cat"
          >
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
  }

  function openEdit(event, obj) {
    event.preventDefault();
    console.log(obj);
    setArtDisplay(<EditArtMenu backFunction={goBack} currObj={obj} />);
  }

  function handleClickPop(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <h3>
          Popular <FaBrain />
        </h3>
        <button className="back-button" onClick={goBack}>
          back
        </button>
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
        <button className="back-button" onClick={goBack}>
          back
        </button>
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
                const circle = createCircle();
                canvas.add(circle);
                canvas.setActiveObject(circle);
                openEdit(event, circle);
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
                const rect = createRect();
                canvas.add(rect);
                canvas.setActiveObject(rect);
                openEdit(event, rect);
                canvas.renderAll();
              }}
            >
              Rectangle
            </button>
          </li>
        </ul>
        <button className="back-button" onClick={goBack}>
          back
        </button>
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
        <button className="back-button" onClick={goBack}>
          back
        </button>
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
        <button className="back-button" onClick={goBack}>
          back
        </button>
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
        <button className="back-button" onClick={goBack}>
          back
        </button>
      </div>
    );
  }

  let [artDisplay, setArtDisplay] = useState(
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

  return <div className="nav-image-category-container">{artDisplay}</div>;
}
