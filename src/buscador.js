export function buscarReglas(reglas, pregunta) {
  const palabrasBusqueda = pregunta
    .toLowerCase()
    .split(/\s+/)
    .filter((palabra) => palabra.length > 2);

  const resultados = [];

  reglas.forEach((regla) => {
    let puntuacion = 0;

    const textoCompleto = `
      ${regla.titulo || ""}
      ${regla.respuesta || ""}
      ${regla.documento || ""}
      ${(regla.palabras || []).join(" ")}
    `.toLowerCase();

    palabrasBusqueda.forEach((palabra) => {
      if (textoCompleto.includes(palabra)) {
        puntuacion++;
      }
    });

    if (puntuacion > 0) {
      resultados.push({
        ...regla,
        puntuacion
      });
    }
  });

  resultados.sort((a, b) => {
    if (b.autoridad !== a.autoridad) {
      return b.autoridad - a.autoridad;
    }

    return b.puntuacion - a.puntuacion;
  });

  return resultados;
}
