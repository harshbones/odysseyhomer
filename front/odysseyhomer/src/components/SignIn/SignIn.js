import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Signin = props => {
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
    fetch("/auth/signin", {
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {" "}
          <TextField
            id="standard-basic"
            type="email"
            name="email"
            onChange={updateForm}
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <TextField
            id="standard-basic"
            type="password"
            name="password"
            onChange={updateForm}
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Submit"
          >
            Sign In
          </Button>
        </Grid>
        <Link to="/signup">Sign up</Link>
        <Snackbar>{flash.flash}</Snackbar>
      </Grid>
    </form>
  );
};

export default Signin;
