import React from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        id="inicio"
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        id="final"
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
