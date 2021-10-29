import { useState, useEffect } from 'react';
import CardHistorial from './cardHistorial'
import { Container, Typography } from '@mui/material/';
import {Link} from 'react-router-dom'

export interface IHistorial {
    id?: number,
    city?: string,
    info?: string
}

export default function Historial() {

    const [listHistorial, setHistorial] = useState<IHistorial[]>([])

    useEffect(() => {

        const getHistorial = async() => {
            
            try {
                const URL = "https://localhost:5001/api/Historial"
                const res = await fetch(URL)
                const data = await res.json()

                data.forEach((item : any) => {
                    let hisObj : IHistorial = {
                        id: item.id,
                        city: item.city,
                        info: item.info
                    }
                    setHistorial((listHistorial) => [...listHistorial, hisObj])
                })       
            } catch (err) {
                console.log("Error", err);
            }
        }
        getHistorial()
    }, [])


    return (
        <Container sx = {{
            width: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            <Typography gutterBottom
                variant="h4" 
                component="div"
                textAlign="justify"
                sx = {{
                    marginTop: '20px',
                    color: "#fff",
                }}                
                >
                Historial
            </Typography>
            { 
                listHistorial.map((item, index) => (
                    <Link to={`/noticias/${item.city}`} style={{ textDecoration: 'none' }}>
                        <CardHistorial key={index} id={item.id} city={item.city} info={item.info} />
                    </Link>
                ))
            }
        </Container>
    )
}