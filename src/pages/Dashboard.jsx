import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Painel de Controle</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total de Pacientes</h2>
            <p className="text-2xl font-bold text-blue-600">125</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Planos Ativos</h2>
            <p className="text-2xl font-bold text-green-600">48</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Exames Agendados</h2>
            <p className="text-2xl font-bold text-purple-600">73</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Pendências do Concierge</h2>
            <p className="text-2xl font-bold text-red-600">12</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Consultas de Hoje</h2>
            <p className="text-2xl font-bold text-yellow-600">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
