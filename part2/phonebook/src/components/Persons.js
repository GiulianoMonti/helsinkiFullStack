import React from "react";

export default function Persons({ person }) {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {person.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
