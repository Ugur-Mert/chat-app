import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import { Register } from "./components/pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
