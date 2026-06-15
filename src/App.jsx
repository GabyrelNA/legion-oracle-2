import { useEffect, useState } from "react";
import { buscarReglas } from "./buscador";
import Resultado from "./Resultado";

export default function App() {
  const [pregunta, setPregunta] = useState("");
  const [resultados, setResultados] = useState([]);
  const [reglas, setReglas] = useState([]);

  useEffect(() => {
    fetch("/reglas.json")
      .then((response) => response.json())
      .then((data) => setReglas(data))
      .catch((error) => {
        console.error("Error cargando reglas:", error);
      });
  }, []);

  const consultar = () => {
    const coincidencias = buscarReglas(reglas, pregunta);
    setResultados(coincidencias);
  };

  const limpiar = () => {
    setPregunta("");
    setResultados([]);
  };

  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "oficial":
        return "#d4edda";

      case "representante_oficial":
        return "#d1ecf1";

      case "comunidad":
        return "#fff3cd";

      default:
        return "#f8f9fa";
    }
  };

  const obtenerEtiqueta = (tipo) => {
    switch (tipo) {
      case "oficial":
        return "OFICIAL";

      case "representante_oficial":
        return "REPRESENTANTE OFICIAL";

      case "comunidad":
        return "COMUNIDAD";

      default:
        return tipo.toUpperCase();
    }
  };

  const mejorResultado =
    resultados.length > 0
      ? resultados[0]
      : null;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Legion Oracle 2.0</h1>

      <p>Asistente de reglas para Star Wars: Legion</p>

      <p>
        Reglas cargadas: <strong>{reglas.length}</strong>
      </p>

      <textarea
        value={pregunta}
        onChange={(e) => setPregunta(e.target.value)}
        placeholder="Escribe tu pregunta..."
        rows="4"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px"
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={consultar}
          style={{
            padding: "10px 20px",
            marginRight: "10px"
          }}
        >
          Consultar
        </button>

        <button
          onClick={limpiar}
          style={{
            padding: "10px 20px"
          }}
        >
          Limpiar
        </button>
      </div>

      {mejorResultado && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "#e8f4ff",
            border: "2px solid #0077cc"
          }}
        >
          <h2>MEJOR RESPUESTA DISPONIBLE</h2>

          <p>
            <strong>
              {obtenerEtiqueta(
                mejorResultado.tipo
              )}
            </strong>
          </p>

          <p>
            Documento:{" "}
            {mejorResultado.documento}
          </p>

          <p>
            Página:{" "}
            {String(mejorResultado.pagina)}
          </p>
        </div>
      )}

      {resultados.length === 0 ? (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px"
          }}
        >
          Aquí aparecerán las respuestas.
        </div>
      ) : (
        resultados.map((regla, index) => (
          <Resultado
            key={index}
            regla={regla}
            obtenerColor={obtenerColor}
            obtenerEtiqueta={obtenerEtiqueta}
          />
        ))
      )}
    </div>
  );
}
