import React from "react";

export default function CountryList({ country }) {
  return (
    <div>
      {country[0].name.common}
      <br />
      Capital: {country[0].capital}
      <br />
      Population: {country[0].population}
      <br />
      Region: {country[0].region}
      <br />
      Languages:
      {Object.values(country[0].languages).map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
      <br />
      Flags:
      <br />
      <p>
        {country.map((countrys) => (
          <img
            key={countrys.flags.png}
            src={countrys.flags.png}
            alt={countrys.name.common}
            width="150"
          />
        ))}
      </p>
    </div>
  );
}

// return (
//     <div>
//       {c[0].name.common}
//       <br />
//       Capital: {c[0].capital}
//       <br />
//       Population: {c[0].population}
//       <br />
//       Region: {c[0].region}
//       <br />
//       Languages:
//       {Object.values(c[0].languages).map((lang) => (
//         <li key={lang}>{lang}</li>
//       ))}
//       <br />
//       Flags:
//       <br />
//       <p>
//         {c.map((country) => (
//           <img
//             key={country.flags.png}
//             src={country.flags.png}
//             alt={country.name.common}
//             width="150"
//           />
//         ))}
//       </p>
//     </div>
//   );
