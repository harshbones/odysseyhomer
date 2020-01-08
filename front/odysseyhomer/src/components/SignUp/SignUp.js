import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Signup = () => {
  const [info, setInfo] = useState({
    email: "bilbon@email.com",
    password: "myPrecious",
    name: "Frodon",
    lastname: "Sacquet"
  });

  const [flash, setFlash] = useState({ flash: "" });

  const updateForm = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(info);
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(
        res => setFlash({ flash: res.flash }),
        err => setFlash({ flash: err.flash })
      );
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <TextField
        id="standard-basic"
        type="text"
        name="name"
        onChange={updateForm}
      />
      <TextField
        id="standard-basic"
        type="text"
        name="lastname"
        onChange={updateForm}
      />
      <TextField
        id="standard-basic"
        type="email"
        name="email"
        onChange={updateForm}
      />
      <TextField
        id="standard-basic"
        type="password"
        name="password"
        onChange={updateForm}
      />
      <Button variant="contained" color="primary" type="submit" value="Submit">
        Sign Up
      </Button>

      <Link to="/signin">Sign in</Link>
      <Snackbar>{flash.flash}</Snackbar>
    </form>
  );
};

export default Signup;
