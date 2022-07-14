import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

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
    setSearch(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };

    personService.create(personObject).then((response) => {
      setPersons(persons.concat(response));
      setNewName("");
      setNewNumber("");
    });
  };
  const personsToShow = persons

    .filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((result) => result);
  // setPersons(persons.concat(personObject));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} search={search} />
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
