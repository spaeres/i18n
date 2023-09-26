import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import messagesEnglish from "./locales/en";
import messagesSpanish from "./locales/es";

// Para detectar el idioma del navegador y asigarlo a la app:
const userLocale = navigator.language;

let idioma;
let messages;
if (userLocale.includes("en")) {
  idioma = "en";
  messages = messagesEnglish;
} else if (userLocale.includes("es")) {
  idioma = "es";
  messages = messagesSpanish;
}

// Esto indica que se usará el formato de localización del browser:
ReactDOM.render(
  <IntlProvider locale={idioma} messages={messages}>
    <JobsList locale={idioma} />
  </IntlProvider>,
  document.getElementById("root")
);
