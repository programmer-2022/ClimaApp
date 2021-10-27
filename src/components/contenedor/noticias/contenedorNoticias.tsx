import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardNoticia from './cardNoticia'
import Divider from '@mui/material/Divider'

export interface INoticias {
    content : string,
    description : string,
    publishedAt : string
}

export default function ContenedorNoticias() {
   
    const [listaNoticias, setNoticias] = useState<INoticias[]>([])

    useEffect(() => {
        const city = "Pokemon"
        const API_KEY = "bcb5e23e3201463288516a8914e2caba" //newsapi.org
        const date = new Date().toISOString().slice(0,10);
        const URL = `https://newsapi.org/v2/everything?q=${city}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`
                              
        const getNoticias = async() => {

            try {
                const res = await fetch(URL)
                const data = await res.json()                
                
                data.articles.forEach((el : any) => {
                    let noticia : INoticias = {
                        content : el.content,
                        description : el.description,
                        publishedAt : el.publishedAt
                    }
                    setNoticias((listaNoticias) => [...listaNoticias, noticia])
                })       
             } catch (err) {
                console.log("Error", err);
            }
        }
        getNoticias()        
    }, [])

    return (
        <Container sx={{ width: 1200, mr: '50px', backgroundColor: '#474b6f', pt: '20px' }}>

            <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#fff', mb: '5px' }}
            >
            Noticias recientes
            </Typography>

            <Divider sx={{ borderColor: '#fff', mb: '10px' }}/>

            {
                listaNoticias.map((el, index) => (
                    <CardNoticia key={index} content={el.content} description={el.description} publishedAt={el.publishedAt} />
                ))
            }
        </Container>
    );
}