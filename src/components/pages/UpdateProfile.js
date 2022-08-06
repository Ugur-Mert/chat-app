import React, { useState } from "react";

import { TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { update, auth } from "../../firebase";
import { login } from "../../store/auth";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const theme = createTheme();

export const UpdateProfile = () => {
  const { user } = useSelector((state) => state.auth);

  const { darkMode } = useSelector((state) => state.mode);

  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
    });
    dispatch(
      login({
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,

        uid: auth.currentUser.uid,
      })
    );
  };

  return (
    <div style={{ height: "100vh" }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
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
            <Typography component="h1" variant="h5">
              Profilinizi Güncelleyin
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    variant="standard"
                    sx={{ input: { color: darkMode ? "white" : "black" } }}
                    placeholder="Ryan Taylor"
                    label="Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    variant="standard"
                    label="Avatar"
                    sx={{ input: { color: darkMode ? "white" : "black" } }}
                    placeholder="URL"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Güncelle
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};
