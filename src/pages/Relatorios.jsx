import React from 'react';
import Sidebar from '../components/Sidebar';

function Relatorios() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Relatórios</h1>
        <p className="text-lg">
          Central de relatórios e visualizações para acompanhamento da operação da clínica.
        </p>
        <div className="mt-6 text-sm text-gray-600">
          (Funcionalidades futuras: exportação de dados, gráficos analíticos, filtros por período, especialidade, plano, entre outros.)
        </div>
      </div>
    </div>
  );
}

export default Relatorios;
