import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  const cards = [
    { label: 'Total de Pacientes', value: 23 },
    { label: 'Total de Planos', value: 7 },
    { label: 'Receita do Mês', value: 'R$ 12.500,00' },
    { label: 'Tarefas Pendentes', value: 5 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.label}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5">{card.value}</Typography>
              <Typography color="text.secondary">{card.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
