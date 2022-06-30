import React, { useState } from "react";

export default function Search({ onKeyPress }) {
  const [location, setLocation] = useState("");

  let handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onKeyPress(event.target.value);
      setLocation("");
    }
  };

  return (
      <input
        className="search__input"
        type="text"
        placeholder="Введите город"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleKeyPress}
      />
  );
}
