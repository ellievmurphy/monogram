import React, { useState } from "react";
import { bucket } from "./contents/bucket";
import { Reorder } from "framer-motion";
import "./LayersView.css";

export default function LayersView() {
  let [itemIds, setItemIds] = useState([...bucket.ids]); //list of item ids
  const initList = [...bucket.layers];

  function removeItem(idx) {
    setItemIds(bucket.layers.splice(idx, 1)); //update list without item at index
  }

  function handleReorder(list) {
    setItemIds(list);
    list.map((id, i) => {
      var found = initList.find((element) => element.id === id);
      //   console.log(found + ": " + i);
      found.moveTo(list.length - i);
    });
  }

  return (
    <Reorder.Group values={itemIds} onReorder={handleReorder}>
      {itemIds.map((id, i) => {
        return (
          <Item
            list={initList}
            key={id}
            value={id}
            ssn={id}
            onRemove={removeItem}
          />
        );
      })}
    </Reorder.Group>
  );
}

const Item = ({ value, list }) => {
  function findLayer(lookID) {
    const found = list.find((element) => element.id === lookID);
    if (found) {
      return found.name;
    } else {
      return "error";
    }
  }
  return (
    <Reorder.Item drag="y" value={value}>
      <h1 className="layer-item-button-wrapper">{findLayer(value)}</h1>
    </Reorder.Item>
  );
};
