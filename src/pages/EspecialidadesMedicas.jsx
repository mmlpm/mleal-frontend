import React from 'react';
import Sidebar from '../components/Sidebar';

function EspecialidadesMedicas() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Especialidades Médicas</h1>
        <p className="text-lg">
          Área destinada ao gerenciamento das especialidades médicas complementares integradas à clínica, conforme os
          protocolos oftalmológicos.
        </p>
        <div className="mt-6 text-sm text-gray-600">
          (Funcionalidades futuras: cadastro, edição, associação com doenças e exames.)
        </div>
      </div>
    </div>
  );
}

export default EspecialidadesMedicas;
