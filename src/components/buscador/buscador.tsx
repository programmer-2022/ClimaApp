import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Container from '@mui/material/Container/Container';

export default function Buscador() {
  return (
    <Container  sx={{ pt: '300px' }}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', 
              display: 'flex', 
              alignItems: 'center', 
              width: 1000
        }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Ingrese una ubicación para obtener resultados de Noticias y Tiempo  (ej: London)"
          inputProps={{ 'aria-label': 'Buscar ciudad' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}
