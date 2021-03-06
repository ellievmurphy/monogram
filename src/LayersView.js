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

  return (
    <Reorder.Group values={itemIds} onReorder={setItemIds}>
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
  return (
    <Reorder.Item drag="y" value={value}>
      <h1 className="layer-item-button-wrapper">
        {list.find((element) => element.id === value).name}
      </h1>
    </Reorder.Item>
  );
};
