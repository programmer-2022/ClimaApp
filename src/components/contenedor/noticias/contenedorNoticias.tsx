import { useState, useEffect } from 'react';
import {Typography, Container, Divider} from '@mui/material/';
import CardNoticia from './cardNoticia'
export interface INoticias {
    title? : string,
    description? : string,
    publishedAt? : string
}

export default function ContenedorNoticias({city} : any) {
   
    const [listaNoticias, setNoticias] = useState<INoticias[]>([])
    const [ciudad, setCiudad] = useState("")
    
    useEffect(() => {
        setCiudad(city)
    }, [ciudad])

    useEffect(() => {

        const API_KEY = "bcb5e23e3201463288516a8914e2caba" //newsapi.org
        const date = new Date().toISOString().slice(0,10);
        
        const getNoticias = async() => {
            
            try {
                const URL = `https://newsapi.org/v2/everything?q=${city}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`
                const res = await fetch(URL)
                const data = await res.json()                
                
                data.articles.forEach((el : any) => {
                    let noticia : INoticias = {
                        title : el.title,
                        description : el.description,
                        publishedAt : el.publishedAt
                    }
                    setNoticias((listaNoticias) => [...listaNoticias, noticia])
                })
                       
             } catch (err) {
                console.log("Error", err);
            }
        }
        
        if(ciudad != null) getNoticias()

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
                    <CardNoticia key={index} title={el.title} description={el.description} publishedAt={el.publishedAt} />
                ))               
            }
        </Container>
    );
}