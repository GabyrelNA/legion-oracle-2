export default function Filtros({
  mostrarOficial,
  setMostrarOficial,
  mostrarRepresentante,
  setMostrarRepresentante,
  mostrarComunidad,
  setMostrarComunidad
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
      <h3>Filtros</h3>

      <label
        style={{
          display: "block",
          marginBottom: "8px"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarOficial}
          onChange={() =>
            setMostrarOficial(
              !mostrarOficial
            )
          }
        />

        {" "}Oficiales
      </label>

      <label
        style={{
          display: "block",
          marginBottom: "8px"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarRepresentante}
          onChange={() =>
            setMostrarRepresentante(
              !mostrarRepresentante
            )
          }
        />

        {" "}Representante oficial
      </label>

      <label
        style={{
          display: "block"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarComunidad}
          onChange={() =>
            setMostrarComunidad(
              !mostrarComunidad
            )
          }
        />

        {" "}Comunidad
      </label>
    </div>
  );
}
