import React, { useState, useEffect } from "react";

export default function AddTextMenu(props) {
  let [keyword, setKeyword] = useState(props.keyword);
  let [loaded, setLoaded] = useState(false);
  let [userInput, setUserInput] = useState("");

  useEffect(() => {
    setKeyword(props.keyword);
  }, [props.keyword]);

  function handleKeywordChange(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(userInput);
  }

  function load() {
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="text-menu-container">
        <section>
          <span className="search">Search:</span>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              value={userInput}
              onChange={handleKeywordChange}
              placeholder="Search for a word..."
            />
          </form>
        </section>
        <div id="keyword-container">{keyword}</div>
      </div>
    );
  } else {
    load();
    return <span>Loading...</span>;
  }
}
