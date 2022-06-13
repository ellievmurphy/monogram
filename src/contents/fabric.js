import { fabric } from "fabric";
import { bucket } from "./bucket";
// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas("c");
canvas.setBackgroundColor(bucket.background);
canvas.setHeight(500);
canvas.setWidth(500);

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: "blue",
  width: 20,
  height: 20,
});

// "add" rectangle onto canvas
//canvas.add(rect);
//rect.set("fill", "red");
//rect.set({ strokeWidth: 5, stroke: "rgba(100,200,200,0.5)" });
//rect.set("angle", 15).set("flipY", true);

export { rect, canvas };
