import { useEffect, useState } from "react";
import { buscarReglas } from "./buscador";
import Resultado from "./Resultado";
import Filtros from "./Filtros";
import FiltrosCategoria from "./FiltrosCategoria";
import FiltrosDocumento from "./FiltrosDocumento";

export default function App() {
  const [pregunta, setPregunta] = useState("");
  const [resultados, setResultados] = useState([]);
  const [reglas, setReglas] = useState([]);

  const [mostrarOficial, setMostrarOficial] =
    useState(true);

  const [
    mostrarRepresentante,
    setMostrarRepresentante
  ] = useState(true);

  const [mostrarComunidad, setMostrarComunidad] =
    useState(true);

  const [mostrarReglas, setMostrarReglas] =
    useState(true);

  const [
    mostrarConsultas,
    setMostrarConsultas
  ] = useState(true);

  const [
    mostrarComunidadCategoria,
    setMostrarComunidadCategoria
  ] = useState(true);

  const [
    mostrarRulesReference,
    setMostrarRulesReference
  ] = useState(true);

  const [
    mostrarRepresentanteDocumento,
    setMostrarRepresentanteDocumento
  ] = useState(true);

  const [
    mostrarComunidadDocumento,
    setMostrarComunidadDocumento
  ] = useState(true);

  useEffect(() => {
    fetch("/rulebook2025.json")
      .then((response) => response.json())
      .then((data) => setReglas(data))
      .catch((error) => {
        console.error(
          "Error cargando reglas:",
          error
        );
      });
  }, []);

  const consultar = () => {
    const coincidencias = buscarReglas(
      reglas,
      pregunta
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

  const resultadosFiltrados = resultados.filter(
    (regla) => {
      if (
        regla.tipo === "oficial" &&
        !mostrarOficial
      ) {
        return false;
      }

      if (
        regla.tipo ===
          "representante_oficial" &&
        !mostrarRepresentante
      ) {
        return false;
      }

      if (
        regla.tipo === "comunidad" &&
        !mostrarComunidad
      ) {
        return false;
      }

      if (
        regla.categoria === "reglas" &&
        !mostrarReglas
      ) {
        return false;
      }

      if (
        regla.categoria ===
          "consulta_oficial" &&
        !mostrarConsultas
      ) {
        return false;
      }

      if (
        regla.categoria === "comunidad" &&
        !mostrarComunidadCategoria
      ) {
        return false;
      }

      if (
        regla.documento ===
          "Rules Reference v2.7" &&
        !mostrarRulesReference
      ) {
        return false;
      }

      if (
        regla.documento ===
          "WhatsApp Representante Oficial" &&
        !mostrarRepresentanteDocumento
      ) {
        return false;
      }

      if (
        regla.documento ===
          "WhatsApp Comunidad" &&
        !mostrarComunidadDocumento
      ) {
        return false;
      }

      return true;
    }
  );

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px"
      }}
    >
      <h1>Legion Oracle 2.0</h1>

      <p>
        Asistente de reglas para Star Wars:
        Legion
      </p>

      <p>
        Reglas cargadas:
        <strong> {reglas.length}</strong>
      </p>

      <textarea
        value={pregunta}
        onChange={(e) =>
          setPregunta(e.target.value)
        }
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

      <Filtros
        mostrarOficial={mostrarOficial}
        setMostrarOficial={
          setMostrarOficial
        }
        mostrarRepresentante={
          mostrarRepresentante
        }
        setMostrarRepresentante={
          setMostrarRepresentante
        }
        mostrarComunidad={
          mostrarComunidad
        }
        setMostrarComunidad={
          setMostrarComunidad
        }
      />

      <FiltrosCategoria
        mostrarReglas={mostrarReglas}
        setMostrarReglas={
          setMostrarReglas
        }
        mostrarConsultas={
          mostrarConsultas
        }
        setMostrarConsultas={
          setMostrarConsultas
        }
        mostrarComunidadCategoria={
          mostrarComunidadCategoria
        }
        setMostrarComunidadCategoria={
          setMostrarComunidadCategoria
        }
      />

      <FiltrosDocumento
        mostrarRulesReference={
          mostrarRulesReference
        }
        setMostrarRulesReference={
          setMostrarRulesReference
        }
        mostrarRepresentanteDocumento={
          mostrarRepresentanteDocumento
        }
        setMostrarRepresentanteDocumento={
          setMostrarRepresentanteDocumento
        }
        mostrarComunidadDocumento={
          mostrarComunidadDocumento
        }
        setMostrarComunidadDocumento={
          setMostrarComunidadDocumento
        }
      />

      {resultados.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#f5f5f5",
            border: "1px solid #ccc"
          }}
        >
          <p>
            <strong>
              Resultados encontrados:
            </strong>{" "}
            {resultadosFiltrados.length}
          </p>

          <p>
            <strong>Mostrando:</strong>
          </p>

          {mostrarOficial && (
            <p>✓ Oficiales</p>
          )}

          {mostrarRepresentante && (
            <p>
              ✓ Representante oficial
            </p>
          )}

          {mostrarComunidad && (
            <p>✓ Comunidad</p>
          )}
        </div>
      )}

      {mejorResultado && (
  <div
    style={{
      marginTop: "20px",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#e8f4ff",
      border:
        "2px solid #0077cc"
    }}
  >
    <h2>
      MEJOR RESPUESTA DISPONIBLE
    </h2>

    <p>
      <strong>
        {obtenerEtiqueta(
          mejorResultado.tipo
        )}
      </strong>
    </p>

    <h3>
      {mejorResultado.titulo}
    </h3>

    <p>
      {mejorResultado.respuesta}
    </p>

    <hr />

    <p>
      <strong>ID:</strong>{" "}
      {mejorResultado.id}
    </p>

    <p>
      <strong>Estado:</strong>{" "}
      {mejorResultado.estado}
    </p>

    <p>
      <strong>Documento:</strong>{" "}
      {mejorResultado.documento}
    </p>

    <p>
      <strong>Página:</strong>{" "}
      {String(
        mejorResultado.pagina
      )}
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
        resultadosFiltrados.map(
          (regla, index) => (
            <Resultado
              key={index}
              regla={regla}
              obtenerColor={
                obtenerColor
              }
              obtenerEtiqueta={
                obtenerEtiqueta
              }
            />
          )
        )
      )}
    </div>
  );
}
