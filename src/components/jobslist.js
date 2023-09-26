import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";

const JobsList = (locale) => {
  // Pone el encabezado de la tabla en negro si el idioma del browser es en ingles.
  // Por otro lado, si es en español lo pone en blanco:
  function determinarEstilo() {
    if (locale.locale === "en")
      return { backgroundColor: "black", color: "white" };
    else return { backgroundColor: "white", color: "black" };
  }

  const estilo = determinarEstilo();

  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1000,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 1500,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 2300,
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" style={estilo}>
              #
            </th>
            <th scope="col" style={estilo}>
              <FormattedMessage id="Position" />
            </th>
            <th scope="col" style={estilo}>
              <FormattedMessage id="Company" />
            </th>
            <th scope="col" style={estilo}>
              <FormattedMessage id="Salary" />
            </th>
            <th scope="col" style={estilo}>
              <FormattedMessage id="City" />
            </th>
            <th scope="col" style={estilo}>
              <FormattedMessage id="PublicationDate" />
            </th>
            <th scope="col" style={estilo}>
              <FormattedMessage id="Views" />
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job locale={locale} key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
