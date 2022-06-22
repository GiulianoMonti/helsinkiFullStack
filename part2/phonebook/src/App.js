import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
    };

    setPersons(persons.concat(personObject));
  };

  <div>debug: {newName}</div>;

  <div> </div>;
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">save</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <Person key={p.name} note={p} />
        ))}
      </ul>
    </div>
  );
};

export default App;
