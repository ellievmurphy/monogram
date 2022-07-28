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
  canvas.getActiveObjects().forEach((obj) => {
    var idx = bucket.layers.indexOf(obj);
    if (idx > -1) {
      bucket.layers.splice(idx, 1);
    }
    idx = bucket.ids.indexOf(obj.objId);
    if (idx > -1) {
      bucket.ids.splice(idx, 1);
    }
    canvas.remove(obj);
    //update layers
    //showLayers()
  });
  canvas.discardActiveObject().renderAll();
  return bucket.layers;
}

function changeBackground(color) {
  bucket.background = color;
}

/* function addUpload(image) {
  document
    .getElementById("uploadedImg")
    .addEventListener("change", function (event) {
      var img = image;
      var reader = new FileReader();
      reader.onload = function (upload) {
        var data = image.target.result;
        canvas.Image.fromURL(data, function (img) {
          var oImg = img.set({ width: 100, height: 100 }).scale(0.9);
          canvas.add(oImg).renderAll();
          var a = canvas.setActiveObject(oImg);
          var dataURL = canvas.toDataURL({ format: "png", quality: 0.8 });
        });
      };
      reader.readAsDataURL(img);
    });
} */

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
  createId,
  addText,
  addObj,
  cloneObj,
  removeObj,
};
