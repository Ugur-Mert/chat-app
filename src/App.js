import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import HomePage from "./components/pages/HomePage";
import { Register } from "./components/pages/Register";
import { Welcome } from "./components/pages/Welcome";
import { Profile } from "./components/pages/Profile";

import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
