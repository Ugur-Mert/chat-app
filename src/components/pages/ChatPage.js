import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import SendMessage from "../sendMessage";
import Grid from "@mui/material/Grid";

import { useSelector } from "react-redux";

export default function ChatPage() {
  const { messages } = useSelector((state) => state.messages);
  console.log(messages);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            marginTop: 5,
            bgcolor: "#cfe8fc",
            height: "60vh",
          }}
        >
          {messages.map((message) => (
            <p key={message.id}>{message.message}</p>
          ))}
        </Box>
        <Grid container justifyContent="center">
          <SendMessage />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
