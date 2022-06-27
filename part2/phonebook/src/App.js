import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} filter={filter} />
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <Persons person={personsToShow} />
    </div>
  );
};

export default App;
