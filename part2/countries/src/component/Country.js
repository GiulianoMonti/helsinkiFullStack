import React from "react";
import CountryList from "./CountryList";

const Country = ({ c, search, setSearch }) => {
  const handleClick = (name) => {
    setSearch(name);
  };
  if (search === "") {
    return <p>Please search countries</p>;
  } else if (c.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (c.length === 1) {
    return <CountryList country={c} />;
  } else if (c.length > 1) {
    return c.map((country) => (
      <p key={country.name.common}>
        {country.name.common}
        <button
          onClick={() => {
            handleClick(country.name.common);
          }}
        >
          show
        </button>
      </p>
    ));
  }

  return <p>No matches</p>;
};
export default Country;
