import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Pacientes from './components/Pacientes';
import Planos from './components/Planos';
import Concierge from './components/Concierge';
import Agenda from './components/Agenda';
import Financeiro from './components/Financeiro';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 20 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/concierge" element={<Concierge />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/financeiro" element={<Financeiro />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
