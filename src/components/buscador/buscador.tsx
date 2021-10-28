import * as React from 'react';
import { createRef, useRef, useState } from 'react';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Container from '@mui/material/Container/Container';
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Contenedor from '../contenedor/contenedor'
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom'

export default function Buscador() {

  const [ciudad, setCiudad] = useState("")
  const [ruta, setRuta] = useState("")
  
  const handleSubmit= (e : any) => {
    setCiudad(e.target.value)
    setRuta(`/noticias/:${ciudad}`) 
  }

  return (
    <Container  sx={{ pt: '300px' }}>
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000 }}
    >
    
      <InputBase
        id="busqueda"
        sx={{ ml: 1, flex: 1, p: '10px' }}
        placeholder="Ingresa Ubicación ej:(London)"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => setCiudad(e.target.value)}
      />
      
      <Link to="/noticias/:Colombia">Buscar</Link>  
           
    </Paper>
    </Container> 
  );
}
