import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContenedorNoticias from './noticias/contenedorNoticias';
import ContenedorClima from './clima/contenedorClima'

export default function Contenedor() {
  return (
    <React.Fragment>
        <CssBaseline />
        <Container 
            sx={{ display: 'flex', justifyContent: 'space-between', m: '50px'}}>
           <ContenedorNoticias />
           <ContenedorClima />
        </Container>
    </React.Fragment>  
  );
}