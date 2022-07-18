import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import SendMessage from "../sendMessage";
import Grid from "@mui/material/Grid";
import SnackbarContent from "@mui/material/SnackbarContent";

import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

export default function ChatPage() {
  const { messages } = useSelector((state) => state.messages);
  const { user } = useSelector((state) => state.auth);
  console.log(messages);
  console.log(user);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            marginTop: 5,
            bgcolor: "#cfe8fc",
          }}
        >
          {messages.map((message) => (
            <Grid key={message.id} container justifyContent="center">
              <Avatar src={message.avatar} />
              <SnackbarContent
                message={` ${message.message}, ${message.hours}:${message.minutes} `} //message is snackbar command.{message.message} is our message
                sx={{ marginTop: 1, marginBottom: 1 }}
              />
            </Grid>
          ))}
        </Box>
        <Grid container justifyContent="center">
          <SendMessage />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
