import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardClima from './cardClima';
import Divider from '@mui/material/Divider'

export interface IClima {
    ciudad : string,
    horaFecha : string,
    viento : number,
    humedad : number,
    nubosidad : number
}

export default function ContenedorClima() {
   

    const [listaClima, setListaClima] = useState<IClima[]>([])

    useEffect(() => {
        const city = "London"
        const KEY_API = "76491ee9d5794d3e875222225212010"
        const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY_API}&q=${city}&aqi=no`
                              
        const getClima = async() => {

            try {
                const res = await fetch(URL)
                const data = await res.json() 
                              
                let clima : IClima = {
                    ciudad : data.location.name,
                    horaFecha : data.location.localtime,
                    viento : data.current.wind_kph,
                    humedad : data.current.humidity,
                    nubosidad : data.current.cloud
                }  
                console.log(clima)
                setListaClima((listaClima) => [...listaClima, clima])
                console.log(listaClima[0])
             } catch (err) {
                console.log("Error", err);
            }
        }
        getClima()        
    }, [])

    return (
        <Container sx={{ width: 800, mr: '50px', backgroundColor: '#474b6f', pt: '20px' }}>

            <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#fff', mb: '5px' }}
            >
            Clima y Tiempo
            </Typography>

                           
               
            

            
 
        </Container>
    );
}