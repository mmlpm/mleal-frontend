import React from 'react';
import Sidebar from '../components/Sidebar';

function Concierge() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Área do Concierge</h1>
        <p className="text-gray-600 mb-6">
          Essa área é destinada ao concierge, responsável por acompanhar os pacientes e garantir o agendamento de exames, retornos e acompanhamento completo dos planos de tratamento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Acompanhamento de Pacientes</h2>
            <p className="text-gray-600 text-sm">
              Lista de pacientes em acompanhamento, com status, datas de retorno e próximos passos.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Notificações e Alertas</h2>
            <p className="text-gray-600 text-sm">
              Funcionalidade futura para alertas automáticos sobre agendamentos pendentes, retornos e exames vencidos.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Integração com Agenda</h2>
            <p className="text-gray-600 text-sm">
              Em breve: visualização integrada com as agendas de médicos e salas, otimizando marcações.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Indicadores de Adesão</h2>
            <p className="text-gray-600 text-sm">
              Painel futuro com métricas de conversão de planos, taxa de comparecimento e evolução dos pacientes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Concierge;
