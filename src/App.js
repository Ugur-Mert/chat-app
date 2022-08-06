import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { Register } from "./components/pages/Register";
import { Welcome } from "./components/pages/Welcome";
import { Profile } from "./components/pages/Profile";
import { UpdateProfile } from "./components/pages/UpdateProfile";
import { ResetPassword } from "./components/pages/ResetPassword";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HomePage from "./components/pages/HomePage";
import { useSelector } from "react-redux";

function App() {
  const { darkMode } = useSelector((state) => state.mode);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <ResponsiveAppBar />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<UpdateProfile />} />
        <Route path="resetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
