import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";
import { sendMessage } from "../firebase";

import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { serverTimestamp } from "firebase/firestore";

export default function SendMessage() {
  const { user } = useSelector((state) => state.auth);

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendMessage({
      message,
      uid: user.uid,
      createdAt: serverTimestamp(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      avatar: user.photoURL,
      name: user.displayName,
    });
    setMessage("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container>
        <Grid item xs={8} md={8}>
          <TextField
            margin="normal"
            type="text"
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
            disabled={!message}
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
