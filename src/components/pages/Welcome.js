import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../../firebase";

export const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout;
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <h1>Welcome </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
