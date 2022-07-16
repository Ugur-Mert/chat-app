import React, { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { useSelector } from "react-redux";
import { sendMessage } from "../firebase";

import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

const theme = createTheme();

export default function SendMessage() {
  const { user } = useSelector((state) => state.auth);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendMessage({
      message,
      uid: user.uid,
    });
    setMessage("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container>
        <Grid item xs={8} md={8}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="message"
            name="message"
            autoFocus
            variant="standard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item xs={2} md={2}>
          <IconButton
            type="submit"
            color="primary"
            sx={{ mt: 3, mb: 2, ml: 3 }}
          >
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
