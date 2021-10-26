import { useState, useEffect } from 'react';
import './contenedorNoticias.css'
import Noticia from './noticia';

export interface INoticias {
    content : string,
    description : string,
    publishedAt : string
}

export default function ContenedorNoticias() {

    const [listaNoticias, setNoticias] = useState<INoticias[]>([])

    useEffect(() => {
        const city = "London"
        const API_KEY = "bcb5e23e3201463288516a8914e2caba" //newsapi.org
        const URL = `https://newsapi.org/v2/everything?q=${city}&from=2021-09-25&sortBy=publishedAt&apiKey=${API_KEY}`
        
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
        <div className="main-container-noticias">
            <h2>Noticias</h2>
            <hr />
            <div className="contenedor-noticias">
                {
                    listaNoticias.map((el, index) => (
                        <Noticia key={index} content={el.content} description={el.description} publishedAt={el.publishedAt} />
                    ))
                }
            </div>
        </div>
    )
}