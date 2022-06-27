import React from "react";

const Country = ({ c, search }) => {
  if (search === "") {
    return <p>Please search countries</p>;
  }
  if (c.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (c.length === 1) {
    return (
      <div>
        {c[0].name.common}
        <br />
        Capital: {c[0].capital}
        <br />
        Population: {c[0].population}
        <br />
        Region: {c[0].region}
        <br />
        Languages:
        {Object.values(c[0].languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
        <br />
        Flags:
        <br />
        <p>
          {c.map((country) => (
            <img
              key={country.flags.png}
              src={country.flags.png}
              alt={country.name.common}
              width="150"
            />
          ))}
        </p>
      </div>
    );
  }
  if (c.length > 1) {
    return c.map((country) => (
      <p key={country.name.common}>{country.name.common}</p>
    ));
  }
  return <p>No matches</p>;
};
export default Country;
