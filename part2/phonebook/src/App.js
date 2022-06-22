import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    e.preventDefault();
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    //Prevent the user from being able to add names that already exist in the phonebook.
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
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
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">save</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <Person key={p.name} person={p} />
        ))}
      </ul>
    </div>
  );
};

export default App;
