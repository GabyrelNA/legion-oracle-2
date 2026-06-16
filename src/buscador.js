export function buscarReglas(reglas, pregunta) {
  const palabrasBusqueda = pregunta
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/\s+/)
    .filter((palabra) => palabra.length > 2);

  const resultados = [];

  reglas.forEach((regla) => {
    let puntuacion = 0;

    palabrasBusqueda.forEach((palabra) => {
      if (
        regla.palabras?.some((p) =>
          p
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(palabra)
        )
      ) {
        puntuacion += 10;
      }

      if (
        regla.tags?.some((t) =>
          t
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(palabra)
        )
      ) {
        puntuacion += 8;
      }

      if (
        regla.titulo
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(palabra)
      ) {
        puntuacion += 6;
      }

      if (
        regla.seccion
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(palabra)
      ) {
        puntuacion += 5;
      }

      if (
        regla.respuesta
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(palabra)
      ) {
        puntuacion += 3;
      }

      if (
        regla.documento
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(palabra)
      ) {
        puntuacion += 1;
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
    if (b.puntuacion !== a.puntuacion) {
      return b.puntuacion - a.puntuacion;
    }

    return b.autoridad - a.autoridad;
  });

  return resultados;
}
