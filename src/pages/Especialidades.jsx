import React from 'react';
import Sidebar from '../components/Sidebar';

function Especialidades() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Especialidades</h1>
        <p className="text-lg">
          Esta seção exibe as especialidades médicas complementares oferecidas na clínica e o vínculo com os planos de acompanhamento.
        </p>
        <div className="mt-6 text-sm text-gray-600">
          (Funcionalidades futuras: cadastro de especialidades, edição, vínculo com doenças oftalmológicas e alertas de recomendação.)
        </div>
      </div>
    </div>
  );
}

export default Especialidades;
