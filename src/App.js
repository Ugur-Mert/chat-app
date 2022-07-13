import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import { Register } from "./components/pages/Register";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
