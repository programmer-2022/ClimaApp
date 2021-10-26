import './noticia.css'

export default function Noticia(props : any) {
    return (
        <div className="tarjeta-noticia">
            <h3><span>Título:</span> {props.content}</h3>
            <p className="descripcion-noticia"><span>Descripción:</span> {props.description}</p>
            <p className="fecha-noticia"><span>Fecha de publicación:</span> {props.publishedAt}</p>
        </div>
    )
}