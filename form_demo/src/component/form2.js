import React, { useState } from "react";
export default function MyForm2() {
  const submitHandle = Event => {
    Event.preventDefault();
  };
  const [state, setState] = useState({ Decripstion: "Alo ola" });
  const handleChange = Event => {
    setState({ Decripstion: Event.target.value });
  };

  return (
    <form className="col-6 mx-auto" onSubmit={submitHandle}>
      <textarea className="d-flex " value={state.Decripstion} /> <br></br>
      <input className="d-flex" type="text" onChange={handleChange}></input>
      <input type="submit" />
    </form>
  );
}
