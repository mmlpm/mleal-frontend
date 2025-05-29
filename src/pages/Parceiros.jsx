import React from 'react';
import Sidebar from '../components/Sidebar';

function Parceiros() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Parceiros Estratégicos</h1>
        <p className="text-lg">
          Esta seção é voltada para o gerenciamento de parceiros estratégicos da clínica, como laboratórios, clínicas associadas ou prestadores de serviço.
        </p>
        <div className="mt-6 text-sm text-gray-600">
          (Funcionalidades futuras: cadastro de parceiros, informações de contato, integração com planos e acompanhamento.)
        </div>
      </div>
    </div>
  );
}

export default Parceiros;
