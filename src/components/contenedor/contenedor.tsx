import React from 'react'
import './contenedor.css'
import ContenedorNoticias from './noticias/contenedorNoticias'
import ContenedorClima from './clima/contenedorClima'

export default function Contenedor() {
    return(
        <div className="contenedor-noticias-clima">
            <ContenedorNoticias />
            <ContenedorClima />
        </div>
    )
}