"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username === "admin" && password === "admin") {
      router.push("/home");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <Card variant="outlined">
      <Grid container className="p-100" justifyContent={"center"}>
        <Grid item md={4}>
          <h2>Login</h2>

          <Grid container>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>

          <br />

          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Grid>
      </Grid>
      <br />
    </Card>
  );
}

export default Login;
