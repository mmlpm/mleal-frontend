import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { label: 'Painel', path: '/painel' },
    { label: 'Pacientes', path: '/pacientes' },
    { label: 'Planos', path: '/planos' },
    { label: 'Concierge', path: '/concierge' },
    { label: 'Configurações', path: '/configuracoes' },
  ];

  return (
    <div className="w-64 h-full bg-blue-900 text-white flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-8">MLeal</h2>
      <nav className="flex flex-col space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-lg ${
              location.pathname === item.path ? 'font-bold underline' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
