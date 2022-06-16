import { fabric } from "fabric";
import { bucket } from "./bucket";
import EditMenu from "../EditMenu";
// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");
const product = new fabric.Rect({
  left: 105,
  top: 30,
  fill: "white",
  width: 300,
  height: 425,
  selectable: false,
  hoverCursor: "cursor",
  id: "product",
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
  // stores key of element as "object_type"-"color"
  bucket.art[bucket.art.length - 1].id = `circle-${circle.fill}`;
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
  // stores key of element as "object_type"-"color"
  bucket.art[bucket.art.length - 1].id = `rect-${rect.fill}`;
  return rect;
}
// create a text object
function createText(text) {
  const input = new fabric.Text(text, { fontFamily: "Comic Sans" });
  bucket.text.push(input);
  // stores key of elements in array as "text"
  bucket.text[bucket.text.length - 1].id = text;
  return input;
}
// update background color
function updateBackground(color) {
  canvas.setActiveObject(product);
  canvas.getActiveObject().set("fill", color.hex);
  canvas.discardActiveObject().renderAll();
}
// delete selected object
function deleteSelected() {
  canvas.getActiveObjects().forEach((obj) => {
    canvas.remove(obj);
  });
  canvas.discardActiveObject().renderAll();
}

function markToggle(stateFunction, object) {
  stateFunction(<EditMenu currObj={object} />);
  canvas.setActiveObject(object);
}
export {
  createCircle,
  canvas,
  createRect,
  createText,
  updateBackground,
  deleteSelected,
  markToggle,
};
