import { fabric } from "fabric";
import { bucket, createId } from "./bucket";

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c", { preserveObjectStacking: true });
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
const createCircle = () => {
  const circle = new fabric.Circle({
    radius: 20,
    fill: "red",
    left: 100,
    top: 100,
  });
  bucket.art.push(circle);
  // stores key of element as "object_type"-"color"
  const objId = createId();
  bucket.art[bucket.art.length - 1].id = objId;
  bucket.layers.push(bucket.art[bucket.art.length - 1]);
  return circle;
};
// create a rectangle object
const createRect = () => {
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: "blue",
    width: 20,
    height: 20,
  });
  console.log(rect);
  bucket.art.push(rect);
  // stores key of element as "object_type"-"color"
  const objId = createId();
  bucket.art[bucket.art.length - 1].id = objId;
  bucket.layers.push(bucket.art[bucket.art.length - 1]);
  return rect;
};
// create a text object
const createText = (text) => {
  const input = new fabric.Text(text, {
    fontFamily: "Comic Sans",
    left: 150,
    top: 150,
  });
  bucket.text.push(input);
  // stores key of elements in array as "text"
  const objId = createId();
  console.log(objId);
  bucket.text[bucket.text.length - 1].id = objId;
  bucket.layers.push(bucket.text[bucket.text.length - 1]);
  return input;
};
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
    //update layers
    //showLayers()
  });
  canvas.discardActiveObject().renderAll();
}

function changeLayer(direction) {
  console.log(direction);
  if (direction === "sendBack") {
    canvas.sendBackwards(canvas.getActiveObject());
  } else if (direction === "bringUp") {
    canvas.bringForward(canvas.getActiveObject());
  } else if (direction === "top") {
    canvas.bringToFront(canvas.getActiveObject());
  } else if (direction === "bottom") {
    canvas.sendToBack(canvas.getActiveObject());
  }
  canvas.renderAll();
}

export {
  canvas,
  createCircle,
  createRect,
  createText,
  updateBackground,
  deleteSelected,
  changeLayer,
};
