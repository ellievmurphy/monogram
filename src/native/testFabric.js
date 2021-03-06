import { fabric } from "fabric";

//NOT REACT -- Canvas
// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");

canvas.setBackgroundColor("blue");

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: "blue",
  width: 20,
  height: 20,
  angle: 45,
});

// "add" rectangle onto canvas
canvas.add(rect);
canvas.renderAll();
