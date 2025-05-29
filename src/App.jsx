import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Painel from './pages/Painel';
import Pacientes from './pages/Pacientes';
import Planos from './pages/Planos';
import Concierge from './pages/Concierge';
import Configuracoes from './pages/Configuracoes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/painel" />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}

export default App;
