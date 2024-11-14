import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, MenuItem, Menu } from '@mui/material';
import Logo from '../assets/Logo.png';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#003366' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={Logo} variant="h6" sx={{ fontWeight: 'bold' }}></img>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <MenuItem>Products</MenuItem>
          <MenuItem>Solutions</MenuItem>
          <MenuItem>Resources</MenuItem>
          <MenuItem>Pricing</MenuItem>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained" style={{backgroundColor:"#FFE492",color:'black',font:"Inter"}}>
            Login
          </Button>
          <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff',backgroundColor:"#4F9CF9",border:"none"}}>
            Try Whitepace Free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
