export default function FiltrosCategoria({
  mostrarReglas,
  setMostrarReglas,
  mostrarConsultas,
  setMostrarConsultas,
  mostrarComunidadCategoria,
  setMostrarComunidadCategoria
}) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}
    >
      <h3>Filtros por categoría</h3>

      <label
        style={{
          display: "block",
          marginBottom: "8px"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarReglas}
          onChange={() =>
            setMostrarReglas(!mostrarReglas)
          }
        />

        {" "}Reglas
      </label>

      <label
        style={{
          display: "block",
          marginBottom: "8px"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarConsultas}
          onChange={() =>
            setMostrarConsultas(
              !mostrarConsultas
            )
          }
        />

        {" "}Consultas oficiales
      </label>

      <label
        style={{
          display: "block"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarComunidadCategoria}
          onChange={() =>
            setMostrarComunidadCategoria(
              !mostrarComunidadCategoria
            )
          }
        />

        {" "}Comunidad
      </label>
    </div>
  );
}
