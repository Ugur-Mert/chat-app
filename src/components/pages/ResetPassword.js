import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { resetPassword } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const { darkMode } = useSelector((state) => state.mode);

  const [resetPasswordEmail, setResetPasswordEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(resetPasswordEmail);
    navigate("/", { replace: true });
  };

  return (
    <div style={{ height: "100vh" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          className={darkMode ? "dark" : "light"}
          component="form"
          onSubmit={handleSubmit}
          noValidate
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
          <Typography component="h1" variant="subtitle1">
            Girdiğiniz email adresine sıfırlama bağlantısı gönderilecektir.
          </Typography>
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
                value={resetPasswordEmail}
                onChange={(e) => setResetPasswordEmail(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!resetPasswordEmail}
              >
                Gönder
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
