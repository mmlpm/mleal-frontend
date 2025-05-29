import React, { useState } from "react";

const Patients = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "João Silva", email: "joao@email.com", phone: "21999999999" },
    { id: 2, name: "Maria Oliveira", email: "maria@email.com", phone: "21888888888" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Pacientes</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Nome</th>
              <th className="px-4 py-2 text-left text-gray-600">E-mail</th>
              <th className="px-4 py-2 text-left text-gray-600">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-t">
                <td className="px-4 py-2">{patient.name}</td>
                <td className="px-4 py-2">{patient.email}</td>
                <td className="px-4 py-2">{patient.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
