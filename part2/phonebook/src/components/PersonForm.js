import React from "react";

export default function PersonForm({
  addPerson,
  handleNameChange,
  handleNumberChange,
  newName,
  newNumber,
}) {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">save</button>
        </div>
      </form>
    </div>
  );
}
