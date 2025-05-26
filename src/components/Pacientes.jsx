import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const api = 'https://mleal.onrender.com/api/pacientes';

const Pacientes = () => {
  const [nome, setNome] = useState('');
  const [dados, setDados] = useState([]);

  const carregar = async () => {
    const res = await axios.get(api);
    setDados(res.data);
  };

  useEffect(() => {
    carregar();
  }, []);

  const salvar = async () => {
    await axios.post(api, { nome });
    setNome('');
    carregar();
  };

  const excluir = async (id) => {
    await axios.delete(`${api}/${id}`);
    carregar();
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Pacientes</Typography>
      <div style={{ marginBottom: 20 }}>
        <TextField label="Nome do Paciente" value={nome} onChange={(e) => setNome(e.target.value)} />
        <Button onClick={salvar} variant="contained" style={{ marginLeft: 10 }}>Salvar</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dados.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.nome}</TableCell>
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

export default Pacientes;
