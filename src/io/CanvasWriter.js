import { bucket } from "../contents/bucket";
import { canvas } from "../contents/fabric-lib";

function exportCanvas(path) {
  return JSON.stringify(canvas);
  //   const background = bucket.background;
  //   bucket.layers.forEach((e) => console.log(e.toString()));
}

export { exportCanvas };
