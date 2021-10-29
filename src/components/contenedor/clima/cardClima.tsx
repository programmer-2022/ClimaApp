import "./cardClima.css"

export default function CardClima (props: any) {
 
  return (
    <div className="ContenedorClima">
      <div className="Temp">
        <h2>{props.temp}°c</h2>
      </div>
      <div className="ContenedorListaClima">
        <ul className="ListaClima">
          <li>Ciudad: {props.ciudad}</li>
          <li>Hora y fecha local: {props.horaFecha}</li>
          <li>Velocidad del viento: {props.viento}kmh</li>
          <li>Humedad: {props.humedad}%</li>
          <li>Nubosidad: {props.nubosidad}%</li>
        </ul>
      </div>
    </div>
  );
}
