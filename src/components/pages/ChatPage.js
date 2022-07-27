import React, { createRef } from "react";

import "./chatPage.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import SendMessage from "../sendMessage";
import Grid from "@mui/material/Grid";

import { useSelector } from "react-redux";

import "react-chat-elements/dist/main.css";
import { MessageList } from "react-chat-elements";
const messageListReferance = createRef();

export default function ChatPage() {
  const { messages } = useSelector((state) => state.messages);
  const { user } = useSelector((state) => state.auth);

  // console.log(messages);
  // console.log(user);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            marginTop: 5,
            bgcolor: "#51557E",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            height: "60vh",
            padding: 3,
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {messages.map((message) => (
            <MessageList
              key={message.id}
              style={{ maxWidth: "480px" }}
              referance={messageListReferance}
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={[
                {
                  position: message.uid === user.uid ? "right" : "left",
                  title: message.name ? `${message.name}` : "Cute Potato",
                  titleColor: "#D6D5A8",
                  theme: "black",
                  avatar: message.avatar,
                  type: "text",
                  text: message.message,
                  dateString: `${message.hours}:${message.minutes}`,
                },
              ]}
            />
          ))}
        </Box>
        <Box
          sx={{
            bgcolor: "#51557E",

            boxShadow: " 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        >
          <Grid container justifyContent="center">
            <SendMessage />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
