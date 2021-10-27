import React from 'react'
import './buscador.css'


export function getCiudad() {
    const txtBuscar = document.getElementById("buscar")?.textContent
    //return "London"
}

export default function Buscador() {
    return (
        <div className="buscador-container">
            <form>
                <input type="text" id="buscar" placeholder="Búsqueda por ciudad" autoComplete="off" />
                <button onClick={getCiudad}>Buscar</button>
            </form>
        </div>
    )
}