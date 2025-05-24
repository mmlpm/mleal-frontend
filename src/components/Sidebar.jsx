import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', path: '/' },
    { text: 'Pacientes', path: '/pacientes' },
    { text: 'Planos', path: '/planos' },
    { text: 'Concierge', path: '/concierge' },
    { text: 'Agenda', path: '/agenda' },
    { text: 'Financeiro', path: '/financeiro' },
  ];

  return (
    <Drawer variant="permanent" sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
    }}>
      <Toolbar />
      <List>
        {menuItems.map(item => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
