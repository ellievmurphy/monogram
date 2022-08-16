import { canvas, createCircle, createText, createRect } from "./fabric-lib";

const bucket = {
  background: "grey",
  uploads: [],
  layers: [],
  ids: [],
  currMenu: "default",
};

function cloneObj(obj) {
  var id = createId();
  bucket.layers.unshift(obj);
  bucket.layers[0].objId = id;
  bucket.layers[0].id = id;
  bucket.ids.unshift(id);
  //   }
  console.log(bucket.layers);
  //   });
}

function addText(input) {
  const text = createText(input); //create text fabric object
  //   console.log(text);
  canvas.add(text); //add to canvas
  canvas.setActiveObject(text); //set as current active object
  canvas.renderAll();
}

function loadFilteredLayers(filterFunction) {
  return bucket.layers.filter(filterFunction);
}

function addArt(art) {
  let obj;
  if (art === "circle") {
    obj = createCircle();
  } else if (art === "rect") {
    obj = createRect();
  }
  canvas.add(obj);
  canvas.setActiveObject(obj);
}

function addObj(type) {
  var obj;
  if (type === "circle") {
    obj = createCircle();
  } else if (type === "rect") {
    obj = createRect();
  }
  canvas.add(obj);
  canvas.setActiveObject(obj);
  //openEdit(event, obj);
  canvas.renderAll();
}

function removeObj() {
  var num;
  canvas.getActiveObjects().forEach((obj) => {
    var idx = bucket.layers.indexOf(obj);
    if (idx > -1) {
      bucket.layers.splice(idx, 1);
    }
    num = obj.objId;

    idx = bucket.ids.indexOf(num);
    if (idx > -1) {
      bucket.ids.splice(idx, 1);
    }
    canvas.remove(obj);
    //update layers
    //showLayers()
  });
  canvas.discardActiveObject().renderAll();
  if (num != null && document.getElementById(num) != null) {
    console.log(num);
    document.getElementById(num).remove();
  } //destroy html
  // TODO: currently deletes properly, but also says "cannot read properties of null"

  return bucket.layers;
}

function changeBackground(color) {
  bucket.background = color;
}

// function onUpload() {}

function changeFont(font) {
  // TODO: definitely need error checking
  canvas.getActiveObject().set("fontFamily", font);
  canvas.renderAll();
}

function updateScale(size) {
  //   const size = document.getElementById("scale-slider").value;
  const currSelect = canvas.getActiveObject();
  if (currSelect.get("type") === "text") currSelect.set("fontSize", size);
  else if (currSelect.get("type") === "circle") currSelect.set("radius", size);
  //   else if (currSelect.get("type") === "rect") currSelect.set("height", size);
  canvas.renderAll();
}

/* Recursive function to create a new alpha-numeric id */
function createId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 9;
  let ranId = "";
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    ranId += characters[randomNum];
  }
  bucket.layers.map(function (item) {
    if (item.id === ranId) {
      return createId();
    }
  });
  return ranId;
}

export {
  bucket,
  changeBackground,
  updateScale,
  createId,
  addText,
  addObj,
  cloneObj,
  removeObj,
  loadFilteredLayers,
  addArt,
  changeFont,
};
