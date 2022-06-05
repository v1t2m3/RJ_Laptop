import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const Message_Error = {
    username: "Username error",
    password: "Password error",
    email: "Email error",
    confirmPassword: "Password must be the same"
  };
  const Regex = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  };
  const [form, setForm] = useState({});
  function handleChange(event) {
    let error = "";
    if (event.target.name === "password") {
      if (form.confirmPassword && form.confirmPassword.value) {
        error =
          event.target.value === form.confirmPassword.value
            ? ""
            : Message_Error[event.target.name];
      } else {
        error = Regex[event.target.name].test(event.target.value)
          ? ""
          : Message_Error[event.target.name];
      }
    } else if (event.target.name === "confirmPassword") {
      error =
        event.target.value === form.password.value
          ? ""
          : Message_Error[event.target.name];
    } else {
      error = Regex[event.target.name].test(event.target.value)
        ? ""
        : Message_Error[event.target.name];
    }
    setForm({
      ...form,
      [event.target.name]: {
        value: event.target.value,
        error: error
      }
    });
    console.log(form.username);
  }

  function handleSubmit() {
    const isFilled =
      form.username &&
      form.email &&
      form.password &&
      form.confirmPassword &&
      form.username.value &&
      form.email.value &&
      form.password.value &&
      form.confirmPassword.value;
    const isError =
      isFilled &&
      (form.username.error ||
        form.email.error ||
        form.password.error ||
        form.confirmPassword.error);
    alert(
      isFilled && !isError
        ? "Create account is successfully!"
        : "Create is fail, please fill out all again!"
    );
  }

  return (
    <div className="App">
      <form className="d-flex flex-column col-6 mx-auto mt-5">
        <h2>Creat Account</h2>
        <div
          className={`custom-input ${form.username &&
            form.username.error &&
            "custom-input-error"}`}
        >
          <label className="text-start">user name</label>
          <input
            name="username"
            value={(form.username && form.username.value) || ""}
            onChange={handleChange}
          />
          {form.username && form.username.error && (
            <p className="error">{form.username.error}</p>
          )}
        </div>
        <div
          className={`custom-input ${form.email &&
            form.email.error &&
            "custom-input-error"}`}
        >
          <label className="text-start">email</label>
          <input
            type="email"
            name="email"
            value={(form.email && form.email.value) || ""}
            onChange={handleChange}
          />
          {form.email && form.email.error && (
            <p className="error">{form.email.error}</p>
          )}
        </div>
        <div
          className={`custom-input ${form.password &&
            form.password.error &&
            "custom-input-error"}`}
        >
          <label className="text-start">password</label>
          <input
            type="password"
            name="password"
            value={(form.password && form.password.value) || ""}
            onChange={handleChange}
          />
          {form.password && form.password.error && (
            <p className="error">{form.password.error}</p>
          )}
        </div>
        <div
          className={`custom-input ${form.confirmPassword &&
            form.confirmPassword.error &&
            "custom-input-error"}`}
        >
          <label className="text-start">confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={(form.confirmPassword && form.confirmPassword.value) || ""}
            onChange={handleChange}
          />
          {form.confirmPassword && form.confirmPassword.error && (
            <p className="error">{form.confirmPassword.error}</p>
          )}
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
export default App;
