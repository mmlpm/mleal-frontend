import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo à Plataforma MLeal</h1>
      <Card className="max-w-xl">
        <CardContent className="space-y-4">
          <p>
            Esta é a central de acompanhamento da sua consultoria. Use o menu lateral para navegar entre os módulos de pacientes, planos, financeiro e mais.
          </p>
          <p className="text-muted-foreground">
            Em breve, novas funcionalidades como agendamento inteligente, integração com sistemas clínicos e dashboards avançados estarão disponíveis.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
