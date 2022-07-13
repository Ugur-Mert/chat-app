import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../../firebase";
import { useSelector } from "react-redux";

export const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await logout();
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <h1>Welcome {user.email} </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
