import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

function Plans() {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get('https://mleal-backend.onrender.com/api/plans');
      setPlans(response.data);
    } catch (error) {
      console.error('Erro ao buscar planos:', error);
    }
  };

  const handleChange = (e) => {
    setNewPlan({ ...newPlan, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mleal-backend.onrender.com/api/plans', newPlan);
      setNewPlan({ name: '', description: '' });
      fetchPlans();
    } catch (error) {
      console.error('Erro ao criar plano:', error);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Planos de Tratamento</h1>
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-xl shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Nome</label>
            <input
              type="text"
              name="name"
              value={newPlan.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-xl"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Descrição</label>
            <textarea
              name="description"
              value={newPlan.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-xl"
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl">
            Criar Plano
          </button>
        </form>

        <h2 className="text-xl font-semibold mb-4">Planos Existentes</h2>
        <ul className="space-y-2">
          {plans.map((plan) => (
            <li key={plan._id} className="p-4 bg-white rounded-xl shadow">
              <strong>{plan.name}</strong>: {plan.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Plans;
