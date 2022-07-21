import React from "react";

export default function Persons({ person, deletePerson }) {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {person.map((persons) => (
          <li key={persons.name}>
            {persons.name} {persons.number}
            <button
              onClick={() => {
                deletePerson(persons.id, persons.name);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
