import React from 'react';
import Sidebar from '../components/Sidebar';

function DoencasOftalmologicas() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Doenças Oftalmológicas</h1>
        <p className="text-lg">
          Esta seção permitirá registrar e visualizar as principais doenças oftalmológicas tratadas na clínica, incluindo seus protocolos e recomendações.
        </p>
        <div className="mt-6 text-sm text-gray-600">
          (Funcionalidades futuras: cadastro, edição, associação com especialidades, exames e planos.)
        </div>
      </div>
    </div>
  );
}

export default DoencasOftalmologicas;
