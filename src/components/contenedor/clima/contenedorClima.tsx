import React, { useState, useEffect } from 'react';
import './contenedorClima.css'
import Clima from './clima';

export default function ContenedorClima() {

    return (
        <div className="main-container-clima">
            <h2>Clima</h2>
            <hr />
            <div className="contenedor-clima"></div>
        </div>
    )
}
