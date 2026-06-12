import { useState } from "react";

export default function App() {
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const consultar = () => {
    const texto = pregunta.toLowerCase();

    if (texto.includes("retirada")) {
      setRespuesta(
        "Respuesta de prueba: una unidad que se retira realiza una acción de movimiento de retirada."
      );
      return;
    }

    if (texto.includes("cobertura")) {
      setRespuesta(
        "Respuesta de prueba: la cobertura reduce impactos antes de la tirada de salvación."
      );
      return;
    }

    setRespuesta(
      "No encuentro todavía una respuesta para esa pregunta."
    );
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Legion Oracle 2.0</h1>

      <p>Asistente de reglas para Star Wars: Legion</p>

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

      <button
        onClick={consultar}
        style={{
          marginTop: "10px",
          padding: "10px 20px"
        }}
      >
        Consultar
      </button>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px"
        }}
      >
        {respuesta || "Aquí aparecerá la respuesta."}
      </div>
    </div>
  );
}
