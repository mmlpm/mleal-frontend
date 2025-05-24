import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const api = 'https://mleal.onrender.com/api/agenda';

const Agenda = () => {
  const [descricao, setDescricao] = useState('');
  const [dados, setDados] = useState([]);

  const carregar = async () => {
    const res = await axios.get(api);
    setDados(res.data);
  };

  useEffect(() => {
    carregar();
  }, []);

  const salvar = async () => {
    await axios.post(api, { descricao });
    setDescricao('');
    carregar();
  };

  const excluir = async (id) => {
    await axios.delete(`${api}/${id}`);
    carregar();
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Agenda</Typography>
      <div style={{ marginBottom: 20 }}>
        <TextField label="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        <Button onClick={salvar} variant="contained" style={{ marginLeft: 10 }}>Salvar</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dados.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.descricao}</TableCell>
                <TableCell>
                  <Button onClick={() => excluir(item.id)} variant="outlined" color="error">Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Agenda;
