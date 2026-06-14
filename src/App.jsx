import { useEffect, useState } from "react";

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
    const texto = pregunta.toLowerCase();

    const coincidencias = reglas.filter((regla) =>
      regla.palabras.some((palabra) =>
        texto.includes(palabra.toLowerCase())
      )
    );

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
          <div
            key={index}
            style={{
              marginTop: "20px",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: obtenerColor(regla.tipo),
              border: "1px solid #999"
            }}
          >
            <h3>
              [{regla.tipo.toUpperCase()}]
            </h3>

            <h2>{regla.titulo}</h2>

            <p>{regla.respuesta}</p>

            <hr />

            <p>
              <strong>Fuente:</strong> {regla.fuente}
            </p>

            <p>
              <strong>Página:</strong> {String(regla.pagina)}
            </p>

            <p>
              <strong>Autoridad:</strong> {regla.autoridad}
            </p>

            <p>
              <strong>Versión:</strong> {regla.version}
            </p>

            <p>
              <strong>Fecha:</strong> {regla.fecha}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
