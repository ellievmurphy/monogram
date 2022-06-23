import React from "react";

export default function EditArtMenu(props) {
  return (
    <div>
      Art!
      <button className="back-button" onClick={props.backFunction}>
        back
      </button>
    </div>
  );
}
