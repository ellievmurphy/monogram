import { fabric } from "fabric";
import { bucket } from "./bucket";
// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");
const product = new fabric.Rect({
  left: 105,
  top: 30,
  fill: "white",
  width: 300,
  height: 425,
  hasControls: false,
  lockMovementX: true,
  lockMovementY: true,
});
canvas.setBackgroundColor(bucket.background);
canvas.setHeight(500);
canvas.setWidth(500);
canvas.add(product);
// create a circle object
function createCircle() {
  const circle = new fabric.Circle({
    radius: 20,
    fill: "red",
    left: 100,
    top: 100,
  });
  bucket.art.push(circle);
  return circle;
}
// create a rectangle object
function createRect() {
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: "blue",
    width: 20,
    height: 20,
  });
  bucket.art.push(rect);
  return rect;
}
// create a text object
function createText(text) {
  const input = new fabric.Text(text, { fontFamily: "Comic Sans" });
  bucket.text.push(input);
  return input;
}
//update background color
function updateBackground(color) {
  canvas.getActiveObject().set("fill", color.hex);
  bucket.background = color.hex;
  canvas.renderAll();
}

export { createCircle, canvas, createRect, createText, updateBackground };
