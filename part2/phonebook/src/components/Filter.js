import React from "react";

export default function Filter({ handleSearch, search }) {
  return (
    <div>
      filter shown with : <input value={search} onChange={handleSearch} />
    </div>
  );
}
