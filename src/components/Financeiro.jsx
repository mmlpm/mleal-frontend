import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Grid, Paper } from '@mui/material';

const api = 'https://mleal.onrender.com/api/financeiro';

const Financeiro = () => {
  const [dados, setDados] = useState({});

  const carregar = async () => {
    const res = await axios.get(api);
    setDados(res.data);
  };

  useEffect(() => {
    carregar();
  }, []);

  const cards = [
    { label: 'Receita do Mês', value: dados.receitaMes },
    { label: 'Receita Recorrente', value: dados.receitaRecorrente },
    { label: 'Inadimplência', value: dados.inadimplencia },
    { label: 'Ticket Médio', value: dados.ticketMedio },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>Financeiro</Typography>
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

export default Financeiro;
