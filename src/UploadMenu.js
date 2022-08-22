import React, { useState } from "react";
import { fabric } from "fabric";
import { canvas } from "./contents/fabric-lib";

export default function UploadMenu() {
  const [selectedImage, setSelectedImage] = useState(null);
  //   let selectedImage = null;
  //   const [base64, setBase64] = useState("");
  let base64 = "";

  function getBase64(cb) {
    let reader = new FileReader();
    console.log(selectedImage);
    reader.readAsDataURL(selectedImage);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
  function updateImage(image) {
    setSelectedImage(image);
  }
  function handleChange(event) {
    //   console.log(event.target.files[0]);
    updateImage(event.target.files[0]);
    if (selectedImage) {
      getBase64((result) => {
        base64 = result;
      });
      console.log("a");
    } else {
      console.log("b");
    }
    //   console.log(base64);
    //   canvas.add(fabric.Image.fromURL(base64));
  }
  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <br />

      <br />
      {selectedImage ? (
        <div>
          {/* {getBase64((result) => {
            base64 = result;
          })} */}
          <img alt="not found" width={"250px"} src={base64} />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      ) : (
        <div>Nothing uploaded yet</div>
      )}
    </div>
  );
  //   let [image, setImage] = useState(null);

  //   //   function handleSubmit(event) {
  //   //     event.preventDefault();
  //   //     console.log(image);
  //   //     console.log(`Selected file - ${image.name}`);
  //   //     var reader = new FileReader();
  //   //     reader.onload = (event) => {
  //   //       var imgObj = new Image();
  //   //       imgObj.src = event.target.result;
  //   //       console.log(`reader target: ${event.target}`);
  //   //       imgObj.onload = () => {
  //   //         var foto = new fabric.Image(imgObj);
  //   //         foto.set({
  //   //           angle: 0,
  //   //           padding: 10,
  //   //           cornersize: 10,
  //   //           height: 110,
  //   //           width: 110,
  //   //         });
  //   //         console.log(foto);
  //   //         canvas.add(foto);
  //   //         canvas.renderAll();
  //   //       };
  //   //     };
  //   //     // reader.readAsDataURL(event.target.files[0]);
  //   //   }

  //   function handleChange(event) {
  //     setImage(event.target.files[0]);
  //     console.log(event.target.files);
  //   }

  //   return (
  //     <div className="upload-menu-container">
  //       Upload File
  //       <form id="uploadImg" onSubmit={console.log(image)}>
  //         <input
  //           type="file"
  //           name="filename"
  //           id="uploadedImg"
  //           accept="image/*"
  //           onInput={handleChange}
  //         />
  //         <br />
  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   );
}
