import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardClima from './cardClima';
import Divider from '@mui/material/Divider'

export default function ContenedorClima() {
   
    return (
        <Container sx={{ width: 800, mr: '50px', backgroundColor: '#474b6f', pt: '20px' }}>

            <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#fff', mb: '5px' }}
            >
            Clima y Tiempo
            </Typography>

            <CardClima />
            <CardClima />
            <CardClima />
            <CardClima />
            <CardClima />
            <CardClima />


        </Container>
    );
}