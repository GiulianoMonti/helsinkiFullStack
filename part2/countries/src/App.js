import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "./component/Country";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const countriesToShow = search
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div>
      <div>
        Find countries <input value={search} onChange={handleSearch} />
      </div>
      <div>
        <Country c={countriesToShow} search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default App;
