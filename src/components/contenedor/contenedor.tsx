import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContenedorNoticias from './noticias/contenedorNoticias';
import ContenedorClima from './clima/contenedorClima'

import { useParams } from 'react-router'

export interface ICiudad {
  ciudad : string
}

export default function Contenedor() {

  const {ciudad} = useParams<ICiudad>()
  
  return (
    <React.Fragment>
        <CssBaseline />
        <Container 
            sx={{ display: 'flex', justifyContent: 'space-between', m: '50px'}}>
           <ContenedorNoticias city={ciudad} />
           <ContenedorClima city={ciudad}/>
        </Container>
    </React.Fragment>  
  );
}