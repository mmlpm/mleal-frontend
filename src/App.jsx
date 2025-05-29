import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Concierge from './pages/Concierge';
import Configuracoes from './pages/Configuracoes';
import Planos from './pages/Planos';
import Pacientes from './pages/Pacientes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/pacientes" element={<Pacientes />} />
      </Routes>
    </Router>
  );
}

export default App;
