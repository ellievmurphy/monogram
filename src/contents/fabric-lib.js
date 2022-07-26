import { fabric } from "fabric";
import { bucket, createId, cloneObj, removeObj } from "./bucket";
import editIcon from "../images/edit-button.svg";
import { transform } from "framer-motion";

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
//create delete icon
var deleteIcon =
  "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
var cloneIcon =
  "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A";
var deleteImg = document.createElement("img");
deleteImg.src = deleteIcon;

var cloneImg = document.createElement("img");
cloneImg.src = cloneIcon;

var editImg = document.createElement("img");
editImg.src = editIcon;

// delete selected object
function deleteSelected() {
  canvas.getActiveObjects().forEach((obj) => {
    canvas.remove(obj);
    //update layers
    //showLayers()
  });
  canvas.discardActiveObject().renderAll();
}
//clone selected object
function cloneObject(eventData, transform) {
  var target = transform.target;
  //var canvas = target.canvas;
  target.clone(function (cloned) {
    cloned.left += 10;
    cloned.top += 10;
    cloneObj(cloned);
    canvas.add(cloned);
  });
}

function createDeleteIcon() {
  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: 0.5,
    offsetY: 16,
    offsetX: 16,
    cursorStyle: "pointer",
    mouseUpHandler: removeObj,
    render: renderIcon(deleteImg),
    cornerSize: 15,
  });
}
function createCloneIcon() {
  fabric.Object.prototype.controls.clone = new fabric.Control({
    x: -0.5,
    y: -0.5,
    offsetY: -16,
    offsetX: -16,
    cursorStyle: "pointer",
    mouseUpHandler: cloneObject,
    render: renderIcon(cloneImg),
    cornerSize: 20,
  });
}
function createEditIcon() {
  fabric.Object.prototype.controls.edit = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -16,
    offsetX: 16,
    cursorStyle: "pointer",
    render: renderIcon(editImg),
    cornerSize: 20,
  });
}

function renderIcon(icon) {
  return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(icon, -size / 2, -size / 2, size, size);
    ctx.restore();
  };
}

// create a circle object
const createCircle = () => {
  const defColor = "red";
  const objId = createId(); //create unique id for object
  const circle = new fabric.Circle({
    radius: 20,
    fill: defColor,
    left: 100,
    top: 100,
    id: objId,
    objId: objId,
  });
  // stores key of element as "object_type"-"color"
  bucket.layers.unshift(circle);
  bucket.layers[0].name = "circle - " + defColor;
  bucket.layers[0].category = "art";
  bucket.ids.unshift(objId);
  createDeleteIcon();
  createCloneIcon();
  createEditIcon();
  return circle;
};
// create a rectangle object
const createRect = () => {
  const defColor = "blue";
  const objId = createId(); //create unique id for object
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: "blue",
    width: 50,
    height: 50,
    id: objId,
    objId: objId,
  });
  // stores name of element as "object_type"-"color"
  bucket.layers.unshift(rect);
  bucket.layers[0].name = `rect - ` + defColor;
  bucket.layers[0].category = "art";
  bucket.ids.unshift(objId); //push id to id list
  createDeleteIcon();
  createCloneIcon();
  createEditIcon();
  return rect;
};
// create a text object and return the input from the user
const createText = (text) => {
  const defColor = "black";
  const objId = createId(); //create unique id for object
  const input = new fabric.Text(text, {
    fontFamily: "Comic Sans",
    left: 150,
    top: 150,
    fill: defColor,
    id: objId,
    objId: objId,
  });
  // stores key of elements in array as "text"
  bucket.layers.unshift(input);
  bucket.layers[0].name = text + ` - ` + defColor;
  bucket.layers[0].category = "text";
  bucket.layers[0].data = text;
  bucket.ids.unshift(objId); //push id to id list
  createDeleteIcon();
  createCloneIcon();
  createEditIcon();
  return input;
};
// update background color
function updateBackground(color) {
  canvas.setActiveObject(product);
  canvas.getActiveObject().set("fill", color.hex);
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
  deleteIcon,
  createCircle,
  createRect,
  createText,
  updateBackground,
  deleteSelected,
  changeLayer,
};
