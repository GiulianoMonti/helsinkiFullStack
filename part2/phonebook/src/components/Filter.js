import React from "react";

export default function Filter({ handleSearch, filter }) {
  return (
    <div>
      filter shown with : <input value={filter} onChange={handleSearch} />
    </div>
  );
}
