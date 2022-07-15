import React from "react";
import Login from "./Login";
import ChatPage from "./ChatPage";

import { useSelector } from "react-redux";

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  return <div>{user ? <ChatPage /> : <Login />}</div>;
};

export default HomePage;
