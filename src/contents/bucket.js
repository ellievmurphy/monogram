import { canvas } from "./fabric";

const bucket = {
  background: "grey",
  art: [],
  text: [],
  uploads: [],
};

function changeBackground(color) {
  bucket.background = color;
}

function addUpload(image) {
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
}

function addImage(image) {
  bucket.uploads.push(image);
  console.log(bucket.art);
  canvas.renderAll();
}

export { bucket, changeBackground, addImage, addUpload };
