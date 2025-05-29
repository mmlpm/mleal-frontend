import React from 'react';
import Sidebar from '../components/Sidebar';

function Especialidades() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Especialidades Médicas</h1>
        <p className="text-lg">
          Gerencie aqui as especialidades médicas integradas à clínica para acompanhamento complementar de pacientes.
        </p>
        <div className="mt-6 text-sm text-gray-600">
          (Funcionalidades futuras: cadastro de especialidades, vinculação com doenças oftalmológicas, integração com o concierge.)
        </div>
      </div>
    </div>
  );
}

export default Especialidades;
