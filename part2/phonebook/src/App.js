import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const personsToShow = persons
    .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    .map((result) => result);

  const handleNameChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    e.preventDefault();
    setNewNumber(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
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

  <div> </div>;
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with :
      <input onChange={handleSearch} value={filter} />
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
        {personsToShow.map((p) => (
          <Person key={p.name} person={p} />
        ))}
      </ul>
    </div>
  );
};

export default App;
