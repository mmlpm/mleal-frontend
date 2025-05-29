import React from 'react';
import Sidebar from '../components/Sidebar';

const Reports = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Relatórios</h1>
        <p>Área destinada à visualização de relatórios operacionais e financeiros da clínica.</p>
        <p className="mt-2 text-sm text-gray-500">Funcionalidade em desenvolvimento. Em breve será possível gerar relatórios por período, tipo de atendimento e indicadores de conversão.</p>
      </main>
    </div>
  );
};

export default Reports;
