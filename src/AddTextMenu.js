import React from "react";

export default function AddTextMenu() {
  return (
    <div className="add-text-container">
      <form>
        <label>Enter Text</label> <br />
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}
