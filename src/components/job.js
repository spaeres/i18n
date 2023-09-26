import React from "react";
import { FormattedDate } from "react-intl";
// Para dar formato a numeros
import { FormattedNumber, FormattedMessage } from "react-intl";

// Configura el formato con separador de miles personalizado
const formatoNumero = {
  style: "decimal",
  useGrouping: true,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  minimumIntegerDigits: 1,
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 21,
  notation: "standard",
  compactDisplay: "short",
  currency: undefined,
  currencyDisplay: "symbol",
  currencySign: "accounting",
  unit: undefined,
  unitDisplay: "long",
  unitSign: "accounting",
  styleDisplay: "auto",
  unitSeparator: "-",
};

const Job = (props) => {
  console.log(props.locale.locale);
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>
        <FormattedMessage
          id="name"
          description="name"
          defaultMessage="{name}"
          values={{ name: props.offer.name }}
        />
      </td>
      <td>
        {" "}
        <FormattedMessage
          id="company"
          description="company"
          defaultMessage="{company}"
          values={{ company: props.offer.company }}
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.salary}
          style="currency"
          currency="COP"
        />
        {props.locale.locale === "es" && props.offer.salary > 1 && (
          <div>millones</div>
        )}
        {props.locale.locale === "es" && props.offer.salary === 1 && (
          <div>millon</div>
        )}
      </td>

      <td>
        <FormattedMessage
          id="city"
          description="city"
          defaultMessage="{city}"
          values={{ city: props.offer.city }}
        />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          // Esto cambia el formato de la fecha:
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} {...formatoNumero} />
      </td>
    </tr>
  );
};

export default Job;
