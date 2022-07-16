import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import SendMessage from "../sendMessage";
import Grid from "@mui/material/Grid";

import Tooltip from "@mui/material/Tooltip";

import { Paper } from "@mui/material";

export default function ChatPage() {
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
          <Grid container justifyContent="center">
            <Grid item>aasdasdasd</Grid>
          </Grid>
        </Box>

        <SendMessage />
      </Container>
    </React.Fragment>
  );
}
