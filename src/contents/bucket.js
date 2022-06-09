const bucket = {
  background: "grey",
  art: [],
  text: [],
};

function changeBackground(color) {
  bucket.background = color;
}

function addImage(image) {
  bucket.art.push(image);
  console.log(bucket.art);
}

export { bucket, changeBackground, addImage };
