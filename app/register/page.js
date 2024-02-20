import React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

function Register() {
  return (
    <Card variant="outlined">
      <Grid container className="p-100" justifyContent={"center"}>
        <Grid item md={4}>
          <h2>Register</h2>

          <Grid container>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <br />

          <Grid container>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <br />

          <Grid container>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <br />

          <Grid container>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <br />

          <Button variant="contained">Register</Button>
        </Grid>
      </Grid>

      <br />
    </Card>
  );
}

export default Register;
