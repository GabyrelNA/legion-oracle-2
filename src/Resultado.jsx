export default function Resultado({
  regla,
  obtenerColor,
  obtenerEtiqueta
}) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        borderRadius: "10px",
        backgroundColor: obtenerColor(
          regla.tipo
        ),
        border: "1px solid #999"
      }}
    >
      <h3>{obtenerEtiqueta(regla.tipo)}</h3>

      <h2>{regla.titulo}</h2>

      <p>
        <strong>Categoría:</strong>{" "}
        {regla.categoria}
      </p>

      <p>
        <strong>Documento:</strong>{" "}
        {regla.documento}
      </p>

      <p>{regla.respuesta}</p>

      <hr />

      <p>
        <strong>Fuente:</strong>{" "}
        {regla.fuente}
      </p>

      <p>
        <strong>Página:</strong>{" "}
        {String(regla.pagina)}
      </p>

      <p>
        <strong>Autoridad:</strong>{" "}
        {regla.autoridad}
      </p>

      <p>
        <strong>Versión:</strong>{" "}
        {regla.version}
      </p>

      <p>
        <strong>Fecha:</strong>{" "}
        {regla.fecha}
      </p>
    </div>
  );
}
