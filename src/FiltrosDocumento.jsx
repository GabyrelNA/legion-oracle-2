export default function FiltrosDocumento({
  mostrarRulesReference,
  setMostrarRulesReference,
  mostrarRepresentanteDocumento,
  setMostrarRepresentanteDocumento,
  mostrarComunidadDocumento,
  setMostrarComunidadDocumento
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
      <h3>Filtros por documento</h3>

      <label
        style={{
          display: "block",
          marginBottom: "8px"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarRulesReference}
          onChange={() =>
            setMostrarRulesReference(
              !mostrarRulesReference
            )
          }
        />

        {" "}Rules Reference
      </label>

      <label
        style={{
          display: "block",
          marginBottom: "8px"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarRepresentanteDocumento}
          onChange={() =>
            setMostrarRepresentanteDocumento(
              !mostrarRepresentanteDocumento
            )
          }
        />

        {" "}WhatsApp Representante Oficial
      </label>

      <label
        style={{
          display: "block"
        }}
      >
        <input
          type="checkbox"
          checked={mostrarComunidadDocumento}
          onChange={() =>
            setMostrarComunidadDocumento(
              !mostrarComunidadDocumento
            )
          }
        />

        {" "}WhatsApp Comunidad
      </label>
    </div>
  );
}
