import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../ResponsiveAppBar.css";

import { Link, useNavigate } from "react-router-dom";
import { register } from "../../firebase";
import { useSelector } from "react-redux";

const theme = createTheme();

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password);
    navigate("/", { replace: true });
  };

  const { darkMode } = useSelector((state) => state.mode);

  return (
    <div style={{ height: "100vh" }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className={darkMode ? "dark" : "light"}
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: 1,
              padding: 3,
              borderRadius: 1,
              boxShadow: darkMode
                ? "0 4px 8px 0 rgb(60, 60, 60), 0 6px 20px 0 rgb(90, 90, 90)"
                : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "dark" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Kayıt Ol
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    sx={{ input: { color: darkMode ? "white" : "black" } }}
                    autoComplete="email"
                    autoFocus
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    sx={{ input: { color: darkMode ? "white" : "black" } }}
                    id="password"
                    autoComplete="current-password"
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    sx={{ input: { color: darkMode ? "white" : "black" } }}
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    variant="standard"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={password !== confirmPassword || !email || !password}
              >
                Kayıt Ol
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/">Zaten bir hesabın var mı ? Giriş yap</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};
