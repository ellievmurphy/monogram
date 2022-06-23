import React, { useEffect, useState } from "react";
import "./EditMenu.css";
import EditTextMenu from "./EditTextMenu";
import EditArtMenu from "./EditArtMenu";

export default function EditMenu(props) {
  let [currMenu, setCurrMenu] = useState(null);
  let currType = props.type;

  useEffect(() => {
    updateMenu(currType);
  }, [currType]);

  function updateMenu(type) {
    if (type === "text") {
      setCurrMenu(<EditTextMenu />);
    } else if (type === "art") {
      setCurrMenu(<EditArtMenu />);
    }
  }
  return <div className="edit-menu-container">{currMenu}</div>;
}
