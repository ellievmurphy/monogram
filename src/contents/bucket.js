const bucket = {
  background: "grey",
  art: [],
  text: [],
  uploads: [],
  layers: [],
  ids: [],
  currMenu: "default",
};

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

/*
    Recursive function to create a new alpha-numeric id
*/
function createId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 9;
  let ranId = "";
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    ranId += characters[randomNum];
  }
  /* ranId = bucket.layers.map(function (item) {
    if (item.id === ranId) {
      return createId();
    }
  });
 */
  return ranId;
}

export { bucket, changeBackground, createId };
