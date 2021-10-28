import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardClima from './cardClima';
import Divider from '@mui/material/Divider'

export interface IClima {
    temp?: string,
    ciudad? : string,
    horaFecha? : string,
    viento? : string,
    humedad? : string,
    nubosidad? : string
}

export default function ContenedorClima(props : any) {
   

    const [clima, setListaClima] = useState<IClima[]>([])

    const [ciudad, setCiudad] = useState("")
 
    useEffect(() => {
        setCiudad(props.city)

        const KEY_API = "76491ee9d5794d3e875222225212010"
        const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY_API}&q=${ciudad}&aqi=no`
                              
        const getClima = async() => {

            try {
                const res = await fetch(URL)
                const data = await res.json()

                console.log(data);                
                            
                let clima : IClima = {
                    temp: data.current.temp_c,
                    ciudad : data.location.name,
                    horaFecha : data.location.localtime,
                    viento : data.current.wind_kph,
                    humedad : data.current.humidity,
                    nubosidad : data.current.cloud
                }  
                setListaClima([clima])

            } catch (err) {
                console.log("Error", err);
            }
        }
        if(ciudad != null) getClima()        
    }, [ciudad])

    return (
        <Container sx={{ width: 800, mr: '50px', backgroundColor: '#474b6f', pt: '20px' }}>

            <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#fff', mb: '5px' }}
            >
            Clima y Tiempo
            </Typography>     
            
            {(clima.length != 0 && ciudad != null) ? (<CardClima temp={clima[0].temp} ciudad={clima[0].ciudad} horaFecha={clima[0].horaFecha} viento={clima[0].viento} humedad={clima[0].humedad} nubosidad={clima[0].nubosidad} />) : (<h3>Cargando...</h3>) }
                 
        </Container>
    );
}