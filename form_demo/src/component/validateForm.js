import React, { useState } from "react";
export default function ValidateForm() {
  const [user, setUser] = useState({ username: "", userage: "" });
  const onchangeHandle = Event => {
    if (Event.target.name === "userage") {
      if (!Number(Event.target.value)) {
        alert("You must fill number!");
      }
    }
    setUser({ ...user, [Event.target.name]: Event.target.value });
  };
  return (
    <form>
      <h2>Hello {user.username}</h2>
      <h2>Your age is {user.userage}</h2>
      <input name="username" type="text" onChange={onchangeHandle} />
      <input name="userage" type="text" onChange={onchangeHandle} />
    </form>
  );
}
