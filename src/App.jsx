import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Pacientes from "./pages/Pacientes";
import Planos from "./pages/Planos";
import Concierge from "./pages/Concierge";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/concierge" element={<Concierge />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
