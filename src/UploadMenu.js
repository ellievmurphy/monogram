import React, { useState } from "react";
import { canvas } from "./contents/fabric-lib";
import { fabric } from "fabric";

export default function UploadMenu() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          //   var imgURL = URL.createObjectURL(selectedImage);
          //   var imgObj = fabric.Image.fromURL(imgURL);
          //   console.log(imgURL);
          //   canvas.add(fabric.Image.fromURL(URL.createObjectURL(selectedImage)));
        }}
      />
      <br />

      <br />
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
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
