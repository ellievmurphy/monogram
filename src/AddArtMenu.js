import React, { useState } from "react";
import {
  FaAngellist,
  FaAt,
  FaDog,
  FaLeaf,
  FaCoffee,
  FaHeart,
  FaBrain,
} from "react-icons/fa";

import "./AddArtMenu.css";

export default function AddArtMenu() {
  let [loaded, setLoaded] = useState(false);
  function goBack(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <form className="category-button-container">
          <button onClick={handleClick} className="category-button popular-cat">
            <FaHeart />
            <h4>{`Most Popular`}</h4>
          </button>
          <button onClick={handleClick} className="category-button emojis-cat">
            <FaAngellist />
            <h4>Emojis</h4>
          </button>
          <button onClick={handleClick} className="category-button symbols-cat">
            <FaAt />
            <h4>{`Symbols & Shapes`}</h4>
          </button>
          <button onClick={handleClick} className="category-button animals-cat">
            <FaDog />
            <h4>Animals</h4>
          </button>
          <button onClick={handleClick} className="category-button nature-cat">
            <FaLeaf />
            <h4>Nature</h4>
          </button>
          <button onClick={handleClick} className="category-button food-cat">
            <FaCoffee />
            <h4>{`Food & Drink`}</h4>
          </button>
        </form>
      </div>
    );
  }

  function handleClick(event) {
    event.preventDefault();
    setArtDisplay(
      <div>
        <h3>
          yay! it worked. your brain is so wrinkly <FaBrain />
        </h3>
        <button className="back-button" onClick={goBack}>
          back
        </button>
      </div>
    );
    load();
  }
  let [artDisplay, setArtDisplay] = useState(
    <div>
      <form className="category-button-container">
        <button onClick={handleClick} className="category-button popular-cat">
          <FaHeart />
          <h4>{`Most Popular`}</h4>
        </button>
        <button onClick={handleClick} className="category-button emojis-cat">
          <FaAngellist />
          <h4>Emojis</h4>
        </button>
        <button onClick={handleClick} className="category-button symbols-cat">
          <FaAt />
          <h4>{`Symbols & Shapes`}</h4>
        </button>
        <button onClick={handleClick} className="category-button animals-cat">
          <FaDog />
          <h4>Animals</h4>
        </button>
        <button onClick={handleClick} className="category-button nature-cat">
          <FaLeaf />
          <h4>Nature</h4>
        </button>
        <button onClick={handleClick} className="category-button food-cat">
          <FaCoffee />
          <h4>{`Food & Drink`}</h4>
        </button>
      </form>
    </div>
  );

  function load() {
    setLoaded(true);
  }

  return <div className="nav-image-category-container">{artDisplay}</div>;
}
