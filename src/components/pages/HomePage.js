import React from "react";
import Login from "./Login";
import ChatPage from "./ChatPage";

import { useSelector } from "react-redux";

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div style={{ height: "100vh" }}>{!user ? <Login /> : <ChatPage />}</div>
  );
};

export default HomePage;
