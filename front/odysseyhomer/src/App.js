import React from "react";
import SignUp from "./components/SignUp/SignUp";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} style={{ "text-align": "center" }}>
                  <img
                    alt="homer"
                    src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                  />
                </Grid>
                <Grid item xs={12} sm={6} alignContent="center">
                  <SignUp />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
