function CreacionCard({ creacion }) {
    return (
      <div className="container-card">
        <img src={creacion.imagen} alt={creacion.titulo} className="creacion-image" />
        <h2 className="creacion-title">{creacion.titulo}</h2>
        <p className="creacion-description">{creacion.descripcion}</p>
      </div>
    );
  }
  export default CreacionCard;