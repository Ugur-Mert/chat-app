import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { Register } from "./components/pages/Register";
import { Welcome } from "./components/pages/Welcome";
import { Profile } from "./components/pages/Profile";
import { UpdateProfile } from "./components/pages/UpdateProfile";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="main">
      <ResponsiveAppBar />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<UpdateProfile />} />
      </Routes>
    </div>
  );
}

export default App;
