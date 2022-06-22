import React from "react";

export default function Person({ person }) {
  return (
    <div>
      {person.name} {person.number}
    </div>
  );
}
