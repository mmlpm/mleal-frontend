import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

const Pacientes = () => {
  const [nome, setNome] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [filtro, setFiltro] = useState("");

  const adicionarPaciente = () => {
    if (!nome.trim()) return;
    setPacientes([...pacientes, { nome }]);
    setNome("");
  };

  const pacientesFiltrados = pacientes.filter((p) =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pacientes</h1>
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Filtrar por nome"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <Input
          placeholder="Novo paciente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Button onClick={adicionarPaciente}>
          <UserPlus className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </div>
      {pacientesFiltrados.length === 0 ? (
        <p className="text-muted-foreground">Nenhum paciente encontrado.</p>
      ) : (
        <div className="space-y-2">
          {pacientesFiltrados.map((p, index) => (
            <Card key={index}>
              <CardContent className="p-4 font-medium">{p.nome}</CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pacientes;
