import React from 'react';
import Sidebar from '../components/Sidebar';

function Concierge() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Concierge</h1>
        <p className="text-lg">
          Esta é a área do concierge responsável por acompanhar os pacientes e garantir que os exames e consultas
          necessárias sejam marcados para o acompanhamento completo dos planos de tratamento.
        </p>
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            (Funcionalidades específicas em desenvolvimento: integração com agenda, alertas de exames, notificações de
            retorno etc.)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Concierge;
