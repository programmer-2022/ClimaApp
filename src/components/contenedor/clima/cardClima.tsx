import "./cardClima.css"
import { IClima } from './contenedorClima'

export default function CardClima ({temp, ciudad, horaFecha, viento, humedad, nubosidad} : IClima) {
 
  return (
    <div className="ContenedorClima">
      <div className="Temp">
        <h2>{temp}°c</h2>
      </div>
      <div className="ContenedorListaClima">
        <ul className="ListaClima">
          <li>Ciudad: {ciudad}</li>
          <li>Hora y fecha local: {horaFecha}</li>
          <li>Velocidad del viento: {viento}kmh</li>
          <li>Humedad: {humedad}%</li>
          <li>Nubosidad: {nubosidad}%</li>
        </ul>
      </div>
    </div>
  );
}
