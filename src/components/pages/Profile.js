import React from "react";

import { useSelector } from "react-redux";

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <img src={user.photoURL} alt="avatar" />
      <p>{user.displayName}</p>
      <p>{user.email}</p>
    </div>
  );
};
