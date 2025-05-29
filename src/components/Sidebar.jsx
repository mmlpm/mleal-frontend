import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const linkClasses = (path) =>
    `block px-4 py-2 rounded ${
      location.pathname === path
        ? "bg-blue-700 text-white"
        : "text-blue-100 hover:bg-blue-600"
    }`;

  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-blue-700">ML eal</div>
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/" className={linkClasses("/")}>
          Dashboard
        </Link>
        <Link to="/pacientes" className={linkClasses("/pacientes")}>
          Pacientes
        </Link>
        <Link to="/planos" className={linkClasses("/planos")}>
          Planos de Tratamento
        </Link>
        <Link to="/concierge" className={linkClasses("/concierge")}>
          Concierge
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
