import { Fragment } from 'react';
import {CssBaseline, Container } from '@mui/material/';
import ContenedorNoticias from './noticias/contenedorNoticias';
import ContenedorClima from './clima/contenedorClima'
import { useParams } from 'react-router'

export interface ICiudad {
  ciudad : string
}

export default function Contenedor() {

  const {ciudad} = useParams<ICiudad>()
  
  return (
    <Fragment>
        <CssBaseline />
        <Container 
            sx={{ display: 'flex', justifyContent: 'space-between', m: '50px'}}>
           <ContenedorNoticias city={ciudad} />
           <ContenedorClima city={ciudad}/>
        </Container>
    </Fragment>  
  );
}